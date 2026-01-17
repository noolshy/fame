-- Таблица пользователей (админы)
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Таблица участников клуба
CREATE TABLE IF NOT EXISTS members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  member_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  birth_date DATE,
  join_date DATE DEFAULT CURRENT_DATE,
  status TEXT DEFAULT 'active',
  avatar_url TEXT,
  bio TEXT,
  social_links TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Таблица заявок на вступление
CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  application_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  birth_date DATE NOT NULL,
  motivation TEXT NOT NULL,
  experience TEXT,
  status TEXT DEFAULT 'pending',
  processed_by INTEGER,
  processed_at DATETIME,
  notes TEXT,
  attachment_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (processed_by) REFERENCES users(id)
);

-- Таблица логов админа
CREATE TABLE IF NOT EXISTS admin_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id INTEGER,
  details TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Триггер для обновления updated_at
CREATE TRIGGER IF NOT EXISTS update_members_timestamp 
AFTER UPDATE ON members 
BEGIN
  UPDATE members SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

CREATE TRIGGER IF NOT EXISTS update_applications_timestamp 
AFTER UPDATE ON applications 
BEGIN
  UPDATE applications SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

CREATE TRIGGER IF NOT EXISTS update_users_timestamp 
AFTER UPDATE ON users 
BEGIN
  UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

-- Вставляем тестового админа (пароль: admin123)
INSERT OR IGNORE INTO users (username, email, password_hash, role) 
VALUES ('admin', 'admin@club.local', '$2a$10$N9qo8uLOickgx2ZMRZoMy.Mrq5Q1B1QH.8bJYzJ7T6Q7tq6Y6p5bK', 'admin');