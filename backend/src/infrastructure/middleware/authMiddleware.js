const jwtService = require('../auth/jwtService');

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Token não fornecido' });
  const [, token] = auth.split(' ');
  try {
    req.user = jwtService.verifyToken(token);
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = authMiddleware;