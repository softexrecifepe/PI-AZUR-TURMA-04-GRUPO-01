import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { BadRequestError } from "../helpers/api-error";
import { UserRepository } from "../repositories/UserRepositorie";

export class UserController {
  async CreateUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const HasUser = await UserRepository.findOne({ where: { email } });

    if (HasUser) {
      throw new BadRequestError("Usuário já existe");
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = UserRepository.create({
      name,
      email,
      password: passwordHash,
    });
    await UserRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json(user);
  }
}
