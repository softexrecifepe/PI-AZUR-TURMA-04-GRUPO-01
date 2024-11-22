import express from "express";
import logger from "morgan";
import helmet from "helmet";
import httpProxy from "express-http-proxy";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Running Application." });
});

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/user/login",
  httpProxy("http://localhost:3001", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/user/register",
  httpProxy("http://localhost:3001", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/gerenciamento/comprador",
  httpProxy("http://localhost:3002", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/gerenciamento/endereco",
  httpProxy("http://localhost:3002", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/pdf/generate-pdf",
  httpProxy("http://localhost:3002", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/gerenciamento/socio",
  httpProxy("http://localhost:3002", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/gerenciamento/vendedor",
  httpProxy("http://localhost:3002", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/aquisicaoImovel",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/comprador",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/construtoraFiadora",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/credora",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/empreendedorFiador",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/endereco",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/imovel",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/incorporadora",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/representante",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/socio",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.use(
  "/api/extracao/vendedor",
  httpProxy("http://localhost:3003", {
    proxyReqPathResolver: (req) => {
      return req.originalUrl; //
    },
  })
);

app.listen(3000, () => console.log("Servidor rodando!"));
