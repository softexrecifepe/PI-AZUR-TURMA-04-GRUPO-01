import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BadRequestError, NotAuthorizedError } from "../helpers/api-error";
import { UserRepository } from "../repositories/UserRepositorie";

type jwtPayload = {
  id: number;
};
export class LoginController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UserRepository.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestError("Login ou senha inválidos!");
    }

    const verifiyPass = await bcrypt.compare(password, user.password);

    if (!verifiyPass) {
      res.status(400).json({ message: "Login ou senha inválidos!" })
    }

    const tk = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "2h",
    });
    const { password: _, ...userLogin } = user;

    return res.status(200).json({
      user: userLogin,
      token: tk,
    });
  }
  async getProfile(req: Request, res: Response) {
    return res.json(req.user);
  }
}
