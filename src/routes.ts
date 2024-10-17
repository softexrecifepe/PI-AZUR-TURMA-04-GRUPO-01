import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { LoginController } from "./controllers/LoginController";
import { authMiddleware } from "./middleware/AuthMiddleware";
export const routes = Router();

// rotas de login
routes.post("/user/login", (req, res) => {
  new LoginController().login(req, res);
});

routes.get("/user/profile", authMiddleware, (req, res) => {
  new LoginController().getProfile(req, res);
});
// rotas de registro

routes.post("/user/register", (req, res) => {
  new UserController().CreateUser(req, res);
});
