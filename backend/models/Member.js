const db = require('../database/db');
const IdGenerator = require('../utils/idGenerator');

class Member {
  static async create(data) {
    const memberId = IdGenerator.generateMemberId();
    const result = await db.run(
      `INSERT INTO members (member_id, full_name, email, phone, birth_date, join_date, 
        status, avatar_url, bio, social_links) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        memberId,
        data.full_name,
        data.email,
        data.phone,
        data.birth_date,
        data.join_date || new Date().toISOString().split('T')[0],
        data.status || 'active',
        data.avatar_url,
        data.bio,
        data.social_links ? JSON.stringify(data.social_links) : null
      ]
    );
    return { id: result.id, member_id: memberId };
  }

  static async findById(id) {
    const member = await db.get('SELECT * FROM members WHERE id = ?', [id]);
    if (member && member.social_links) {
      member.social_links = JSON.parse(member.social_links);
    }
    return member;
  }

  static async findByMemberId(memberId) {
    const member = await db.get('SELECT * FROM members WHERE member_id = ?', [memberId]);
    if (member && member.social_links) {
      member.social_links = JSON.parse(member.social_links);
    }
    return member;
  }

  static async findByEmail(email) {
    const member = await db.get('SELECT * FROM members WHERE email = ?', [email]);
    if (member && member.social_links) {
      member.social_links = JSON.parse(member.social_links);
    }
    return member;
  }

  static async getAll(filters = {}) {
    let query = 'SELECT * FROM members WHERE 1=1';
    const params = [];

    if (filters.status) {
      query += ' AND status = ?';
      params.push(filters.status);
    }

    if (filters.search) {
      query += ' AND (full_name LIKE ? OR email LIKE ? OR member_id LIKE ?)';
      const searchTerm = `%${filters.search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    query += ' ORDER BY created_at DESC';

    const members = await db.all(query, params);
    return members.map(member => {
      if (member.social_links) {
        member.social_links = JSON.parse(member.social_links);
      }
      return member;
    });
  }

  static async update(id, data) {
    const updateFields = [];
    const params = [];

    Object.keys(data).forEach(key => {
      if (key !== 'id') {
        if (key === 'social_links' && data[key]) {
          updateFields.push(`${key} = ?`);
          params.push(JSON.stringify(data[key]));
        } else {
          updateFields.push(`${key} = ?`);
          params.push(data[key]);
        }
      }
    });

    params.push(id);
    await db.run(`UPDATE members SET ${updateFields.join(', ')} WHERE id = ?`, params);
  }

  static async updateStatus(id, status) {
    await db.run('UPDATE members SET status = ? WHERE id = ?', [status, id]);
  }

  static async delete(id) {
    await db.run('DELETE FROM members WHERE id = ?', [id]);
  }

  static async getStats() {
    const stats = await db.all(`
      SELECT 
        status,
        COUNT(*) as count
      FROM members 
      GROUP BY status
    `);
    
    const total = await db.get('SELECT COUNT(*) as total FROM members');
    
    return {
      total: total.total,
      by_status: stats.reduce((acc, stat) => {
        acc[stat.status] = stat.count;
        return acc;
      }, {})
    };
  }
}

module.exports = Member;