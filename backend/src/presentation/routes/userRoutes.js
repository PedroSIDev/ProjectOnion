const express = require('express');
const router = express.Router();
const authMiddleware = require('../../infrastructure/middleware/authMiddleware');

module.exports = (userController) => {
  router.post('/login', userController.login);
  router.post('/register', userController.register);

  router.post('/refresh-token', authMiddleware, (req, res) => {
    const user = req.user;
    const token = require('../../infrastructure/auth/jwtService').generateToken({
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    });
    res.json({ token });
  });

  return router;
};