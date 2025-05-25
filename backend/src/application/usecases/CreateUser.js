class CreateUser{
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({name, email, password, role}) {
        const user = { name, email, password, role };
        return await this.userRepository.create(user);
    }
}
module.exports = CreateUser;
