import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entities/User";

export class UserController {

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ message: "E-mail já registrado." });
      }

      
      const hashPassword = await bcrypt.hash(password, 10);

      
      const newUser = await User.save(User.create({ name, email, password: hashPassword }));

      
      return res.status(201).json({ id: newUser.id, name: newUser.name, email: newUser.email });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar usuário."});
    }
  }

 
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      
      const user = await User.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Credenciais inválidas." });
      }

      
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1h" });

      
      return res.status(200).json({ message: "Login bem-sucedido.", token });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao fazer login." }); 
    }
  }
}
