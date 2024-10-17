# API de Gerenciamento de Usuários - FAP

Esta API permite o registro, login e acesso ao perfil de usuários. Todas as funcionalidades estão protegidas por autenticação JWT e seguras com o bcrypt.

## Requisitos

- Node.js
- MySQL
- Express
- TypeORM
- JWT para autenticação

## Instalação

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   ```

2. Instale as dependências:

   ```bash
   yarn add
   ```

3. Configure o banco de dados MySQL e atualize o arquivo `.env` com suas credenciais de banco de dados e chave JWT.

4. Rode as migrações do banco de dados:

   ```bash
   yarn typeorm migration:run
   ```

5. Inicie o servidor:

   ```bash
   yarn dev
   ```

## Endpoints

### 1. Registro de Usuário

- **Rota:** `/user/register`
- **Método:** `POST`
- **Descrição:** Registra um novo usuário no sistema.

#### Exemplo de requisição:

```json
POST /user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "123456"
}
```

#### Resposta de sucesso:

```json
{
  "message": "Usuário registrado com sucesso",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

### 2. Login de Usuário

- **Rota:** `/user/login`
- **Método:** `POST`
- **Descrição:** Faz login do usuário e retorna um token JWT.

#### Exemplo de requisição:

```json
POST /user/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "123456"
}
```

#### Resposta de sucesso:

```json
{
  "token": "jwt_token_aqui"
}
```

### 3. Perfil do Usuário

- **Rota:** `/user/profile`
- **Método:** `GET`
- **Descrição:** Retorna os dados do perfil do usuário autenticado.

#### Cabeçalhos necessários:

```bash
Authorization: jwt_token_aqui
```

#### Resposta de sucesso:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

## Middleware

- **authMiddleware:** Middleware usado para proteger rotas que necessitam de autenticação. Verifica se o token JWT está presente e válido.
