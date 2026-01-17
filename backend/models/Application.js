const db = require('../database/db');
const IdGenerator = require('../utils/idGenerator');

class Application {
  static async create(data) {
    const applicationId = IdGenerator.generateApplicationId();
    const result = await db.run(
      `INSERT INTO applications (application_id, full_name, email, phone, birth_date, 
        motivation, experience, attachment_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        applicationId,
        data.full_name,
        data.email,
        data.phone,
        data.birth_date,
        data.motivation,
        data.experience,
        data.attachment_url
      ]
    );
    return { id: result.id, application_id: applicationId };
  }

  static async findById(id) {
    return await db.get('SELECT * FROM applications WHERE id = ?', [id]);
  }

  static async findByAppId(applicationId) {
    return await db.get('SELECT * FROM applications WHERE application_id = ?', [applicationId]);
  }

  static async getAll(filters = {}) {
    let query = 'SELECT * FROM applications WHERE 1=1';
    const params = [];

    if (filters.status) {
      query += ' AND status = ?';
      params.push(filters.status);
    }

    if (filters.search) {
      query += ' AND (full_name LIKE ? OR email LIKE ? OR application_id LIKE ?)';
      const searchTerm = `%${filters.search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    if (filters.startDate && filters.endDate) {
      query += ' AND DATE(created_at) BETWEEN ? AND ?';
      params.push(filters.startDate, filters.endDate);
    }

    query += ' ORDER BY created_at DESC';
    
    if (filters.limit) {
      query += ' LIMIT ?';
      params.push(filters.limit);
    }

    return await db.all(query, params);
  }

  static async updateStatus(id, status, processedBy = null, notes = '') {
    const updateData = {
      status,
      notes,
      processed_by: processedBy,
      processed_at: status !== 'pending' ? new Date().toISOString() : null
    };

    await db.run(
      `UPDATE applications SET status = ?, notes = ?, processed_by = ?, processed_at = ? 
       WHERE id = ?`,
      [updateData.status, updateData.notes, updateData.processed_by, updateData.processed_at, id]
    );
  }

  static async update(id, data) {
    const updateFields = [];
    const params = [];

    Object.keys(data).forEach(key => {
      if (key !== 'id') {
        updateFields.push(`${key} = ?`);
        params.push(data[key]);
      }
    });

    params.push(id);
    await db.run(`UPDATE applications SET ${updateFields.join(', ')} WHERE id = ?`, params);
  }

  static async delete(id) {
    await db.run('DELETE FROM applications WHERE id = ?', [id]);
  }

  static async getStats() {
    const stats = await db.all(`
      SELECT 
        status,
        COUNT(*) as count
      FROM applications 
      GROUP BY status
    `);
    
    const total = await db.get('SELECT COUNT(*) as total FROM applications');
    const today = await db.get(`
      SELECT COUNT(*) as count 
      FROM applications 
      WHERE DATE(created_at) = DATE('now')
    `);
    
    return {
      total: total.total,
      today: today.count,
      by_status: stats.reduce((acc, stat) => {
        acc[stat.status] = stat.count;
        return acc;
      }, {})
    };
  }
}

module.exports = Application;