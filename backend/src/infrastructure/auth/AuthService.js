const jwt = require('jsonwebtoken');
const SECRET = 'mysecret';

class AuthService {
    generateToken(user) {
        return jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '1h' });
    }

    verifyToken(token) {
        return jwt.verify(token, SECRET);
    }
}
module.exports = new AuthService();
