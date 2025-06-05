import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Request, Response } from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const promoSignups: { name: string; email: string }[] = [];

  app.post("/api/promos", (req: Request, res: Response) => {
    const { name, email } = req.body as { name?: string; email?: string };
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email required" });
    }
    promoSignups.push({ name, email });
    res.status(201).json({ message: "Signup recorded" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
