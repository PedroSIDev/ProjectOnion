const express = require('express');
const router = express.Router();
const UserRepositorySQLite = require('../../infrastructure/repositories/UserRepositorySQLite');
const CreateUser = require('../../application/usecases/CreateUser');
const authService = require('../../infrastructure/auth/AuthService');

const userRepository = new UserRepositorySQLite();
const createUser = new CreateUser(userRepository);

router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = await createUser.execute({ name, email, password, role });
    res.json(user);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userRepository.findByEmail(email);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = authService.generateToken(user);
    res.json({ token });
});

module.exports = router;
