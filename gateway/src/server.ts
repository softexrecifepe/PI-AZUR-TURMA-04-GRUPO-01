import express from "express";
import logger from "morgan";
import helmet from "helmet";
import httpProxy from "express-http-proxy";
import path, { resolve } from "path";
import { readFileSync } from "fs";

const pathFile = resolve(process.cwd(), "config.yml");

// terminar
const readConfig = readFileSync(pathFile, { encoding: "utf-8" });
console.log(pathFile);
console.log(readConfig);

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Running Application." });
});

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/user",
  httpProxy("http://localhost:3000", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

// outras rotas

app.listen(3002, () => console.log("Servidor rodando!"));
