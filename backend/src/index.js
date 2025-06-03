const express = require('express');
const sqlite = require('sqlite-async');
const UserRepository = require('./infrastructure/database/sqlite/UserRepository');
const JwtService = require('./infrastructure/auth/jwtService');
const LoginUser = require('./application/usecases/user/LoginUser');
const CreateUser = require('./application/usecases/user/CreateUser');
const UserController = require('./presentation/controllers/userController');
const userRoutes = require('./presentation/routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  const db = await sqlite.Database.open('database.sqlite');
  await db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )`);

  const userRepository = new UserRepository(db);
  const loginUser = new LoginUser(userRepository, JwtService);
  const createUser = new CreateUser(userRepository);
  const userController = new UserController({ loginUser, createUser });

  app.use('/api/users', userRoutes(userController));

  app.listen(3001, () => console.log('Backend rodando na porta 3001'));
})();