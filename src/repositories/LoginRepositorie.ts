import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export const LoginRepository = AppDataSource.getRepository(User);
