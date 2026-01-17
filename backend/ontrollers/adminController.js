const User = require('../models/User');
const AdminLog = require('../models/AdminLog');
const Member = require('../models/Member');
const Application = require('../models/Application');

class AdminController {
  async getAllUsers(req, res) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (err) {
      console.error('Get users error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;

      const existing = await User.findByUsername(username) || await User.findByEmail(email);
      if (existing) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const userId = await User.create(username, email, password);
      
      await AdminLog.create(
        req.user.userId,
        'create',
        'user',
        userId,
        `Created user ${username}`,
        req
      );

      res.status(201).json({ message: 'User created successfully', id: userId });
    } catch (err) {
      console.error('Create user error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      await User.update(id, req.body);
      
      await AdminLog.create(
        req.user.userId,
        'update',
        'user',
        id,
        'Updated user details',
        req
      );

      res.json({ message: 'User updated successfully' });
    } catch (err) {
      console.error('Update user error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      
      if (id == req.user.userId) {
        return res.status(400).json({ error: 'Cannot delete yourself' });
      }

      await User.delete(id);
      
      await AdminLog.create(
        req.user.userId,
        'delete',
        'user',
        id,
        'Deleted user',
        req
      );

      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error('Delete user error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getLogs(req, res) {
    try {
      const { userId, action, targetType, startDate, endDate, limit } = req.query;
      const filters = {};
      
      if (userId) filters.userId = userId;
      if (action) filters.action = action;
      if (targetType) filters.targetType = targetType;
      if (startDate && endDate) {
        filters.startDate = startDate;
        filters.endDate = endDate;
      }
      if (limit) filters.limit = parseInt(limit);

      const logs = await AdminLog.getLogs(filters);
      res.json(logs);
    } catch (err) {
      console.error('Get logs error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getRecentActivity(req, res) {
    try {
      const { limit } = req.query;
      const activity = await AdminLog.getRecentActivity(limit || 50);
      res.json(activity);
    } catch (err) {
      console.error('Get activity error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getDashboardStats(req, res) {
    try {
      const [memberStats, appStats, recentActivity] = await Promise.all([
        Member.getStats(),
        Application.getStats(),
        AdminLog.getRecentActivity(10)
      ]);

      const totalStats = {
        members: memberStats.total,
        applications: appStats.total,
        applications_today: appStats.today,
        member_status: memberStats.by_status,
        application_status: appStats.by_status,
        recent_activity: recentActivity
      };

      res.json(totalStats);
    } catch (err) {
      console.error('Get dashboard stats error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async exportData(req, res) {
    try {
      const { type } = req.params;
      const { format = 'json', startDate, endDate } = req.query;

      let data;
      let filename;

      switch (type) {
        case 'members':
          data = await Member.getAll();
          filename = `members_${new Date().toISOString().split('T')[0]}`;
          break;
        case 'applications':
          const filters = {};
          if (startDate && endDate) {
            filters.startDate = startDate;
            filters.endDate = endDate;
          }
          data = await Application.getAll(filters);
          filename = `applications_${new Date().toISOString().split('T')[0]}`;
          break;
        case 'logs':
          const logFilters = {};
          if (startDate && endDate) {
            logFilters.startDate = startDate;
            logFilters.endDate = endDate;
          }
          data = await AdminLog.getLogs(logFilters);
          filename = `logs_${new Date().toISOString().split('T')[0]}`;
          break;
        default:
          return res.status(400).json({ error: 'Invalid export type' });
      }

      await AdminLog.create(
        req.user.userId,
        'export',
        type,
        null,
        `Exported ${type} data in ${format} format`,
        req
      );

      if (format === 'csv') {
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename=${filename}.csv`);
        
        if (data.length > 0) {
          const headers = Object.keys(data[0]).join(',');
          const rows = data.map(row => 
            Object.values(row).map(value => 
              typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
            ).join(',')
          );
          res.send([headers, ...rows].join('\n'));
        } else {
          res.send('');
        }
      } else {
        res.json(data);
      }
    } catch (err) {
      console.error('Export error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = new AdminController();