class UserController {
  constructor({ loginUser, createUser }) {
    this.loginUser = loginUser;
    this.createUser = createUser;
  }

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await this.loginUser.execute({ email, password });
      res.json(result);
    } catch (e) {
      res.status(401).json({ error: e.message });
    }
  };

  register = async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
      const user = await this.createUser.execute({ name, email, password, role });
      res.status(201).json({ id: user.id, name: user.name, email: user.email, role: user.role });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };
}

module.exports = UserController;