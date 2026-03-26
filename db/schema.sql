CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE user_role AS ENUM (
  'citizen',
  'institution_operator',
  'supervisor',
  'platform_admin'
);

CREATE TYPE media_type AS ENUM ('image', 'video');
CREATE TYPE appeal_status AS ENUM ('draft', 'submitted', 'triaged', 'assigned', 'in_progress', 'responded', 'closed');
CREATE TYPE priority_level AS ENUM ('low', 'medium', 'high', 'urgent');
CREATE TYPE verification_status AS ENUM ('pending', 'matched', 'warning', 'mismatch');
CREATE TYPE alert_severity AS ENUM ('info', 'warning', 'critical');

CREATE TABLE system_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(180) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role user_role NOT NULL,
  institution_name VARCHAR(180),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE institutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(180) NOT NULL,
  institution_code VARCHAR(80) UNIQUE NOT NULL,
  jurisdiction_scope VARCHAR(120),
  contact_email VARCHAR(255),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(80) UNIQUE NOT NULL,
  name VARCHAR(160) NOT NULL,
  parent_code VARCHAR(80),
  default_priority priority_level NOT NULL DEFAULT 'medium',
  default_institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE appeals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  citizen_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  external_reference VARCHAR(120) UNIQUE,
  title VARCHAR(180),
  citizen_note TEXT,
  draft_text TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  assigned_institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
  priority priority_level NOT NULL DEFAULT 'medium',
  status appeal_status NOT NULL DEFAULT 'draft',
  latitude NUMERIC(9, 6),
  longitude NUMERIC(9, 6),
  location_text TEXT,
  submitted_at TIMESTAMPTZ,
  responded_at TIMESTAMPTZ,
  closed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE appeal_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID NOT NULL REFERENCES appeals(id) ON DELETE CASCADE,
  media_type media_type NOT NULL,
  storage_url TEXT NOT NULL,
  thumbnail_url TEXT,
  checksum_sha256 VARCHAR(128),
  captured_at TIMESTAMPTZ,
  uploaded_by_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE ai_analysis_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID NOT NULL REFERENCES appeals(id) ON DELETE CASCADE,
  model_name VARCHAR(120) NOT NULL,
  model_version VARCHAR(80) NOT NULL,
  generated_text TEXT,
  suggested_category_code VARCHAR(80),
  suggested_institution_code VARCHAR(80),
  suggested_priority priority_level,
  confidence NUMERIC(5, 4) NOT NULL,
  extracted_signals JSONB NOT NULL DEFAULT '[]'::jsonb,
  reasoning_summary TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE operator_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID NOT NULL REFERENCES appeals(id) ON DELETE CASCADE,
  reviewer_user_id UUID NOT NULL REFERENCES system_users(id) ON DELETE RESTRICT,
  approved_category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  approved_institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
  approved_priority priority_level,
  override_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE appeal_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID NOT NULL REFERENCES appeals(id) ON DELETE CASCADE,
  institution_id UUID NOT NULL REFERENCES institutions(id) ON DELETE RESTRICT,
  assigned_by_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  assigned_to_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  sla_due_at TIMESTAMPTZ,
  status VARCHAR(40) NOT NULL DEFAULT 'open',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE response_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID NOT NULL REFERENCES appeals(id) ON DELETE CASCADE,
  uploaded_by_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  media_type media_type NOT NULL,
  storage_url TEXT NOT NULL,
  checksum_sha256 VARCHAR(128),
  note TEXT,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE verification_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID NOT NULL REFERENCES appeals(id) ON DELETE CASCADE,
  initial_media_id UUID REFERENCES appeal_media(id) ON DELETE SET NULL,
  response_media_id UUID REFERENCES response_media(id) ON DELETE SET NULL,
  model_name VARCHAR(120) NOT NULL,
  model_version VARCHAR(80) NOT NULL,
  same_location BOOLEAN,
  issue_resolved BOOLEAN,
  similarity_score NUMERIC(5, 4),
  verification_status verification_status NOT NULL DEFAULT 'pending',
  warning_reasons JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID REFERENCES appeals(id) ON DELETE CASCADE,
  verification_result_id UUID REFERENCES verification_results(id) ON DELETE CASCADE,
  severity alert_severity NOT NULL,
  title VARCHAR(180) NOT NULL,
  body TEXT NOT NULL,
  is_resolved BOOLEAN NOT NULL DEFAULT FALSE,
  resolved_by_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE model_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID NOT NULL REFERENCES appeals(id) ON DELETE CASCADE,
  source VARCHAR(60) NOT NULL,
  field_name VARCHAR(60) NOT NULL,
  previous_value TEXT,
  corrected_value TEXT,
  feedback_by_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appeal_id UUID REFERENCES appeals(id) ON DELETE CASCADE,
  actor_user_id UUID REFERENCES system_users(id) ON DELETE SET NULL,
  action_type VARCHAR(80) NOT NULL,
  action_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_appeals_status_priority ON appeals(status, priority);
CREATE INDEX idx_appeals_assigned_institution ON appeals(assigned_institution_id);
CREATE INDEX idx_analysis_appeal_id ON ai_analysis_results(appeal_id);
CREATE INDEX idx_assignments_institution ON appeal_assignments(institution_id, status);
CREATE INDEX idx_verification_appeal_id ON verification_results(appeal_id, verification_status);
CREATE INDEX idx_alerts_resolution ON alerts(is_resolved, severity);
CREATE INDEX idx_audit_logs_appeal_id ON audit_logs(appeal_id, created_at DESC);
