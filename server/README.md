# ASAN muraciet Vision AI API Scaffold

Bu qovluq ASAN muraciet ucun vizual analiz ve dogrulama hellinin `Express + TypeScript` skeletini saxlayir.

## Daxil olan route-lar

- `GET /health`
- `POST /auth/register`
- `POST /auth/login`
- `GET /appeals`
- `POST /appeals`
- `POST /analysis/preview`
- `POST /analysis/route`
- `POST /verification/compare`
- `GET /insights/overview`

## Bu scaffold neyi gosterir

- Rol esasli auth modeli
- Muraciet qebulu ucun payload formati
- Vizual analiz preview kontrakti
- Yonlendirme ve prioritet cavabi
- Evvel-sonra dogrulama endpoint formati
- Dashboard ucun KPI cavabi

## Novbeti backend addimlari

- In-memory demo datani PostgreSQL ile evez etmek
- Media storage ve signed URL qatini elave etmek
- Real vision model / queue sistemi ile integrate olmaq
- Audit log, notification ve webhook axinlarini derinlesdirmek
