import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../helpers/api-error";
import { UserRepository } from "../repositories/UserRepositorie";
type jwtPayload = {
  id: number;
};
import jwt from "jsonwebtoken";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new NotAuthorizedError("Token inválido");
  }

  const tk = authorization.split(" ")[1];

  const { id } = jwt.verify(tk, process.env.JWT_PASS!) as jwtPayload;

  const user = await UserRepository.findOneBy({ id });

  if (!user) {
    throw new NotAuthorizedError("Token inválido");
  }

  const { password: _, ...userLogado } = user;

  req.user = userLogado;
  next();
};
