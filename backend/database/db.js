const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, '../../data/database.db');
const INIT_SQL_PATH = path.join(__dirname, 'init.sql');

class Database {
  constructor() {
    this.db = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(DB_PATH, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Connected to SQLite database');
          resolve(this.db);
        }
      });
    });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, changes: this.changes });
        }
      });
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Database connection closed');
          resolve();
        }
      });
    });
  }

  async initDatabase() {
    await this.connect();
    
    // Проверяем существование директории для uploads
    const uploadsDir = path.join(__dirname, '../../data/uploads');
    const avatarsDir = path.join(uploadsDir, 'avatars');
    const appsDir = path.join(uploadsDir, 'applications');
    
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
      fs.mkdirSync(avatarsDir, { recursive: true });
      fs.mkdirSync(appsDir, { recursive: true });
    }

    // Выполняем SQL из init.sql
    const initSQL = fs.readFileSync(INIT_SQL_PATH, 'utf8');
    await this.run(initSQL);
    
    console.log('Database initialized successfully');
    return this;
  }
}

module.exports = new Database();