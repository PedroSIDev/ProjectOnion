const IUserRepository = require('../../../domain/contracts/IUserRepository');
const User = require('../../../domain/entities/User');
class UserRepository extends IUserRepository {
  constructor(db) {
    super();
    this.db = db;
  }

  async findByEmail(email) {
    const row = await this.db.get('SELECT * FROM users WHERE email = ?', [email]);
    return row ? new User(row) : null;
  }

  async create(user) {
    const result = await this.db.run(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [user.name, user.email, user.password, user.role]
    );
    user.id = result.lastID;
    return user;
  }

  async findById(id) {
    const row = await this.db.get('SELECT * FROM users WHERE id = ?', [id]);
    return row ? new User(row) : null;
  }
}

module.exports = UserRepository;