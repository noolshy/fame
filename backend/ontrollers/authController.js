const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AdminLog = require('../models/AdminLog');

class AuthController {
  async login(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
      }

      const user = await User.findByUsername(username);
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isValidPassword = await User.validatePassword(password, user.password_hash);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { userId: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      await AdminLog.create(user.id, 'login', 'system', null, 'User logged in', req);

      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async profile(req, res) {
    try {
      const user = await User.findById(req.user.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Profile error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async logout(req, res) {
    try {
      await AdminLog.create(req.user.userId, 'logout', 'system', null, 'User logged out', req);
      res.json({ message: 'Logged out successfully' });
    } catch (err) {
      console.error('Logout error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async validateToken(req, res) {
    try {
      const user = await User.findById(req.user.userId);
      if (!user) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      res.json({ valid: true, user });
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }
}

module.exports = new AuthController();