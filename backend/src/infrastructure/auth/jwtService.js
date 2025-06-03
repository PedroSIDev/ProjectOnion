const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'supersecret';

class JwtService {
  generateToken(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: '1s' });
  }

  verifyToken(token) {
    return jwt.verify(token, SECRET);
  }
}

module.exports = new JwtService();