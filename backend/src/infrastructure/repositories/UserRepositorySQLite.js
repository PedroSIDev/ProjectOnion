const db = require('../database/db');
const User = require('../../domain/entities/User');
const UserRepository = require('../../domain/repositories/UserRepository');

class UserRepositorySQLite extends UserRepository {
    create(user) {
        return new Promise((resolve, reject) => {
            const { name, email, password, role } = user;
            db.run(`INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`,
                [name, email, password, role],
                function (err) {
                    if (err) reject(err);
                    resolve({ id: this.lastID, ...user });
                });
        });
    }

    findByEmail(email) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
                if (err) reject(err);
                if (!row) resolve(null);
                resolve(new User(row.id, row.name, row.email, row.password, row.role));
            });
        });
    }
}
module.exports = UserRepositorySQLite;
