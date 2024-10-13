import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";


const PORT;

export const AppDataSource = new DataSource({
  type: 'mysql',
  host:
  port: PORT,
  username:
  password: 
  database: 
  entities:  [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})