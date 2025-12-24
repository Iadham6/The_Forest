import express from "express";
import cors from "cors";
import authRoutes from "./features/auth/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/auth", authRoutes);

export default app;
