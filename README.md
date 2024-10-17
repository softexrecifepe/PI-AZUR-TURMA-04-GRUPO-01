```markdown
# API REST de Autenticação de Usuários - SOFTEX

Esta API RESTful permite o registro e login de usuários, além de fornecer acesso a informações do perfil do usuário.

## Rotas

**Autenticação:**

- **POST /user/login:** Faz o login do usuário com email e senha.
    - **Request body:**
        ```json
        {
          "email": "[seuemail@gmail.com]",
          "password": "senha123"
        }
        ```
    - **Response:** Token JWT em caso de sucesso.
- **GET /user/profile:** Retorna as informações do perfil do usuário logado.
    - **Headers:** `Authorization: Bearer <token>` (token JWT obtido no login)
    - **Response:** Dados do usuário (exceto a senha).

**Registro:**

- **POST /user/register:** Registra um novo usuário.
    - **Request body:**
        ```json
        {
          "name": "Nome do Usuário",
          "email": "[seuemail@gmail.com]",
          "password": "senha123"
        }
        ```
    - **Response:** Dados do usuário criado (exceto a senha).

## Middleware

- **authMiddleware:**  Middleware para autenticação de rotas protegidas (ex: `/user/profile`). Verifica a presença e validade do token JWT na requisição.

## Tecnologias

- Node.js
- Express
- TypeScript
- bcrypt (para hash de senhas)
- jsonwebtoken (para geração e verificação de tokens JWT)
- mysql 

## Como usar

1. **Faça o clone do repositório:** `git clone <url_do_repositorio>`
2. **Instale as dependências:** `yarn add`
3. **Instale os tipos:** `@types/tipo`
3. **Configure as variáveis de ambiente:**
    - Crie um arquivo `.env` na raiz do projeto.
    - Defina as variáveis de ambiente necessárias, como a chave secreta para o JWT (`JWT_PASS`).
4. **Execute a API:** `yarn dev`

## Exemplos de requisições

**Login:**

```
POST /user/login
Content-Type: application/json

{
  "email": "[seuemail@gmail.com]",
  "password": "senha123"
}
```

**Perfil:**

```
GET /user/profile
Authorization:<token>
```

**Registro:**

```
POST /user/register
Content-Type: application/json

{
  "name": "Nome do Usuário",
  "email": "[seuemail@gmail.com]",
  "password": "senha123"
}
```

