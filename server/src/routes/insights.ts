import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/auth.js";

const router = Router();

router.get(
  "/overview",
  requireAuth,
  requireRole(["supervisor", "platform_admin", "institution_operator"]),
  (_req, res) => {
    return res.json({
      metrics: {
        categorizedAccuracy: 0.92,
        manualReviewReduction: "3x",
        averageDraftTimeSeconds: 54,
        verificationWarningRate: 0.08,
        slaCompliance: 0.94
      },
      queue: {
        urgentAppeals: 17,
        warningCases: 8,
        lowConfidenceCases: 11
      }
    });
  }
);

export default router;
