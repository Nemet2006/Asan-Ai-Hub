import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { config } from "../config.js";

const router = Router();

const registerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["citizen", "institution_operator", "supervisor", "platform_admin"])
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z
    .enum(["citizen", "institution_operator", "supervisor", "platform_admin"])
    .optional()
});

router.post("/register", (req, res) => {
  const parsed = registerSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid payload", issues: parsed.error.flatten() });
  }

  const token = jwt.sign(
    {
      sub: "demo-user-id",
      role: parsed.data.role,
      email: parsed.data.email
    },
    config.jwtSecret,
    { expiresIn: "7d" }
  );

  return res.status(201).json({
    message: "Registration scaffold ready",
    token
  });
});

router.post("/login", (req, res) => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid payload", issues: parsed.error.flatten() });
  }

  const role = parsed.data.role ?? "institution_operator";
  const token = jwt.sign(
    {
      sub: "demo-user-id",
      role,
      email: parsed.data.email
    },
    config.jwtSecret,
    { expiresIn: "7d" }
  );

  return res.json({
    token,
    user: {
      id: "demo-user-id",
      fullName: "Demo Operator",
      role,
      email: parsed.data.email
    }
  });
});

export default router;
