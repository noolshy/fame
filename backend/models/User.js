const db = require('../database/db');
const bcrypt = require('bcryptjs');

class User {
  static async findByUsername(username) {
    return await db.get('SELECT * FROM users WHERE username = ?', [username]);
  }

  static async findByEmail(email) {
    return await db.get('SELECT * FROM users WHERE email = ?', [email]);
  }

  static async findById(id) {
    return await db.get('SELECT id, username, email, role, created_at FROM users WHERE id = ?', [id]);
  }

  static async create(username, email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const result = await db.run(
      'INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)',
      [username, email, passwordHash, 'admin']
    );
    return result.id;
  }

  static async validatePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  static async update(id, data) {
    const { username, email } = data;
    if (data.password) {
      const passwordHash = await bcrypt.hash(data.password, 10);
      await db.run(
        'UPDATE users SET username = ?, email = ?, password_hash = ? WHERE id = ?',
        [username, email, passwordHash, id]
      );
    } else {
      await db.run(
        'UPDATE users SET username = ?, email = ? WHERE id = ?',
        [username, email, id]
      );
    }
  }

  static async getAll() {
    return await db.all('SELECT id, username, email, role, created_at FROM users ORDER BY created_at DESC');
  }

  static async delete(id) {
    await db.run('DELETE FROM users WHERE id = ?', [id]);
  }
}

module.exports = User;