import cors from "cors";
import express from "express";
import analysisRouter from "./routes/analysis.js";
import appealsRouter from "./routes/appeals.js";
import authRouter from "./routes/auth.js";
import insightsRouter from "./routes/insights.js";
import verificationRouter from "./routes/verification.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/auth", authRouter);
  app.use("/appeals", appealsRouter);
  app.use("/analysis", analysisRouter);
  app.use("/verification", verificationRouter);
  app.use("/insights", insightsRouter);

  return app;
}
