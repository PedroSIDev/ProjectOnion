const { v4: uuidv4 } = require('uuid');

class User {
    constructor({ id = uuidv4(), name, email, password, role}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password; // Deve ser armazenada de forma segura (hash)
        this.role = role;
    }

    toJSON() {
        const { password, ...userWithoutPassword } = this;
        return userWithoutPassword;
    }
}

module.exports = User;