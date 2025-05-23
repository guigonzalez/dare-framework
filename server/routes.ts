import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for framework levels
  app.get("/api/framework-levels", async (req, res) => {
    try {
      const levels = await storage.getAllFrameworkLevels();
      res.json(levels);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch framework levels", error: (error as Error).message });
    }
  });

  app.get("/api/framework-levels/:id", async (req, res) => {
    try {
      const level = await storage.getFrameworkLevel(parseInt(req.params.id));
      if (!level) {
        return res.status(404).json({ message: "Framework level not found" });
      }
      res.json(level);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch framework level", error: (error as Error).message });
    }
  });

  // API routes for contributions
  app.get("/api/contributions", async (req, res) => {
    try {
      const contributions = await storage.getAllContributions();
      res.json(contributions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contributions", error: (error as Error).message });
    }
  });

  app.post("/api/contributions", async (req, res) => {
    try {
      const contribution = await storage.createContribution(req.body);
      res.status(201).json(contribution);
    } catch (error) {
      res.status(500).json({ message: "Failed to create contribution", error: (error as Error).message });
    }
  });

  app.get("/api/contributions/:id", async (req, res) => {
    try {
      const contribution = await storage.getContribution(parseInt(req.params.id));
      if (!contribution) {
        return res.status(404).json({ message: "Contribution not found" });
      }
      res.json(contribution);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contribution", error: (error as Error).message });
    }
  });

  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const user = await storage.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to create user", error: (error as Error).message });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUser(parseInt(req.params.id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user", error: (error as Error).message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
