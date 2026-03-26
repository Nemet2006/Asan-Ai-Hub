import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import { compareEvidence } from "../services/vision.js";

const router = Router();

const compareSchema = z.object({
  initialSignals: z.array(z.string()).min(1),
  responseSignals: z.array(z.string()).min(1),
  sameStreetHint: z.boolean().optional(),
  claimedResolved: z.boolean().optional()
});

router.post("/compare", requireAuth, (req, res) => {
  const parsed = compareSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid payload", issues: parsed.error.flatten() });
  }

  const result = compareEvidence(parsed.data);

  return res.json({
    result,
    status: result.warningReasons.length === 0 ? "matched" : "warning"
  });
});

export default router;
