const db = require('../database/db');

class AdminLog {
  static async create(userId, action, targetType, targetId = null, details = '', req = null) {
    await db.run(
      `INSERT INTO admin_logs (user_id, action, target_type, target_id, details, ip_address, user_agent) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        action,
        targetType,
        targetId,
        details,
        req?.ip || req?.connection?.remoteAddress || 'unknown',
        req?.headers['user-agent'] || 'unknown'
      ]
    );
  }

  static async getLogs(filters = {}) {
    let query = `
      SELECT al.*, u.username 
      FROM admin_logs al 
      LEFT JOIN users u ON al.user_id = u.id 
      WHERE 1=1
    `;
    const params = [];

    if (filters.userId) {
      query += ' AND al.user_id = ?';
      params.push(filters.userId);
    }

    if (filters.action) {
      query += ' AND al.action = ?';
      params.push(filters.action);
    }

    if (filters.targetType) {
      query += ' AND al.target_type = ?';
      params.push(filters.targetType);
    }

    if (filters.startDate && filters.endDate) {
      query += ' AND DATE(al.created_at) BETWEEN ? AND ?';
      params.push(filters.startDate, filters.endDate);
    }

    query += ' ORDER BY al.created_at DESC';
    
    if (filters.limit) {
      query += ' LIMIT ?';
      params.push(filters.limit);
    }

    return await db.all(query, params);
  }

  static async getRecentActivity(limit = 50) {
    return await this.getLogs({ limit });
  }

  static async getUserActivity(userId, limit = 100) {
    return await this.getLogs({ userId, limit });
  }
}

module.exports = AdminLog;