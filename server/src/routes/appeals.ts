import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import { generateAnalysisPreview } from "../services/vision.js";

const router = Router();

const appeals = [
  {
    id: "appeal-101",
    status: "triaged",
    category: "Yol infrastrukturu",
    priority: "urgent",
    assignedInstitution: "Yol xidmeti",
    location: "Baki, Nerimanov"
  },
  {
    id: "appeal-102",
    status: "responded",
    category: "Isiqlandirma",
    priority: "high",
    assignedInstitution: "Kommunal xidmet",
    location: "Sumqayit"
  }
];

const createAppealSchema = z.object({
  mediaType: z.enum(["image", "video"]),
  citizenNote: z.string().min(2).optional(),
  gps: z
    .object({
      lat: z.number(),
      lng: z.number()
    })
    .optional(),
  landmarks: z.array(z.string()).optional()
});

router.get("/", requireAuth, (_req, res) => {
  return res.json({ items: appeals });
});

router.post("/", requireAuth, (req, res) => {
  const parsed = createAppealSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid payload", issues: parsed.error.flatten() });
  }

  const analysis = generateAnalysisPreview(parsed.data);

  return res.status(201).json({
    message: "Appeal accepted",
    appeal: {
      id: "appeal-new",
      status: "submitted",
      ...analysis
    }
  });
});

export default router;
