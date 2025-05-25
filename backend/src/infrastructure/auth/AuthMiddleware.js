const authService = require('./AuthService');

app.use(express.json());

function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = authService.verifyToken(token);
        req.user = decoded;
        next();
    } catch {
        res.status(403).json({ message: 'Forbidden' });
    }
}
module.exports = authenticate;
