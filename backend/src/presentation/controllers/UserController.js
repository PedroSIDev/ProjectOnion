const UserRepositorySQLite = require('../../infrastructure/repositories/UserRepositorySQLite');
const CreateUser = require('../../application/usecases/CreateUser');
const authService = require('../../infrastructure/auth/AuthService');

const userRepository = new UserRepositorySQLite();
const createUser = new CreateUser(userRepository);

class UserController {
    static async register(req, res) {
        try {
            const { name, email, password, role } = req.body;
            const user = await createUser.execute({ name, email, password, role });
            return res.status(201).json({
                message: "Usuário criado com sucesso",
                user
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro no servidor" });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userRepository.findByEmail(email);

            if (!user || user.password !== password) {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }

            const token = authService.generateToken(user);
            return res.json({ token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro no servidor" });
        }
    }
}

module.exports = UserController;
