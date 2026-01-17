const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const db = require('./database/db');
const authRoutes = require('./routes/authRoutes');
const memberRoutes = require('./routes/memberRoutes');
const appRoutes = require('./routes/appRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Статические файлы
app.use('/uploads', express.static(path.join(__dirname, '../data/uploads')));

// Роуты
app.use('/api/auth', authRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/applications', appRoutes);
app.use('/api/admin', adminRoutes);

// Проверка соединения
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Обработка 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

db.initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});