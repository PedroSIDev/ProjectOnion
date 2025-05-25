const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT
    )`);

    db.run(`CREATE TABLE projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        owner INTEGER,
        FOREIGN KEY(owner) REFERENCES users(id)
    )`);

    db.run(`CREATE TABLE tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        project_id INTEGER,
        assigned_to INTEGER,
        status TEXT,
        FOREIGN KEY(project_id) REFERENCES projects(id),
        FOREIGN KEY(assigned_to) REFERENCES users(id)
    )`);

    // Usuário admin
    db.run(`INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`,
        ['Admin', 'admin@example.com', 'admin123', 'admin']);

    // Usuário colaborador
    db.run(`INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`,
        ['Colaborador', 'colab@example.com', 'colab123', 'colaborador']);
});

module.exports = db;
