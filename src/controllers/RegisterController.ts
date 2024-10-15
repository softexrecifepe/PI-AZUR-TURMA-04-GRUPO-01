import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

class RegisterController {
  async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email e senha são obrigatórios" });
      }

      const userRepository = getRepository(User);
      const existingUser = await userRepository.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: "Usuário já existe" });
      }

      const user = userRepository.create({ email, password });

      await userRepository.save(user);

      return res
        .status(201)
        .json({ message: "Usuário registrado com sucesso", id: user.id, user });
    } catch (error) {
      console.error("Error during registration:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export default new RegisterController();
