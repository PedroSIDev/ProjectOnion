const bcrypt = require('bcryptjs');
const User = require('../../../domain/entities/User');

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password, role }) {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ id: null, name, email, password: hashed, role });
    return await this.userRepository.create(user);
  }
}

module.exports = CreateUser;