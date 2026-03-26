import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import { generateAnalysisPreview } from "../services/vision.js";

const router = Router();

const previewSchema = z.object({
  mediaType: z.enum(["image", "video"]),
  citizenNote: z.string().optional(),
  gps: z
    .object({
      lat: z.number(),
      lng: z.number()
    })
    .optional(),
  landmarks: z.array(z.string()).optional()
});

router.post("/preview", requireAuth, (req, res) => {
  const parsed = previewSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid payload", issues: parsed.error.flatten() });
  }

  return res.json({
    result: generateAnalysisPreview(parsed.data)
  });
});

router.post("/route", requireAuth, (req, res) => {
  const parsed = previewSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid payload", issues: parsed.error.flatten() });
  }

  const result = generateAnalysisPreview(parsed.data);

  return res.json({
    route: {
      institution: result.assignedInstitution,
      category: result.category,
      priority: result.priority,
      confidence: result.confidence
    }
  });
});

export default router;
