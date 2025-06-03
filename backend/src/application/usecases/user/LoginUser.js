const bcrypt = require('bcryptjs');

class LoginUser {
  constructor(userRepository, jwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  async execute({ email, password }) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error('Usuário não encontrado');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Senha inválida');
    const token = this.jwtService.generateToken({
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    });
    return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
  }
}

module.exports = LoginUser;