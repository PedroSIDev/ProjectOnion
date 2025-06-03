class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    const userExists = await this.userRepository.findByEmail(userData.email);
    if (userExists) {
      throw new Error('User already exists');
    }
    return this.userRepository.create(userData);
  }
}

module.exports = CreateUser;