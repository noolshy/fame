const Member = require('../models/Member');
const AdminLog = require('../models/AdminLog');
const { uploadAvatar } = require('../utils/imageUpload');

class MemberController {
  async createMember(req, res) {
    try {
      uploadAvatar(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }

        const memberData = req.body;
        
        if (req.file) {
          memberData.avatar_url = `/uploads/avatars/${req.file.filename}`;
        }

        const existing = await Member.findByEmail(memberData.email);
        if (existing) {
          return res.status(400).json({ error: 'Member with this email already exists' });
        }

        const result = await Member.create(memberData);
        
        await AdminLog.create(
          req.user.userId,
          'create',
          'member',
          result.id,
          `Created member ${result.member_id}`,
          req
        );

        res.status(201).json({
          message: 'Member created successfully',
          member_id: result.member_id,
          id: result.id
        });
      });
    } catch (err) {
      console.error('Create member error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getAllMembers(req, res) {
    try {
      const { status, search } = req.query;
      const filters = {};
      
      if (status) filters.status = status;
      if (search) filters.search = search;

      const members = await Member.getAll(filters);
      res.json(members);
    } catch (err) {
      console.error('Get members error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getMember(req, res) {
    try {
      const { id } = req.params;
      const member = await Member.findById(id);
      
      if (!member) {
        return res.status(404).json({ error: 'Member not found' });
      }
      
      res.json(member);
    } catch (err) {
      console.error('Get member error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async updateMember(req, res) {
    try {
      uploadAvatar(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }

        const { id } = req.params;
        const updateData = req.body;

        if (req.file) {
          updateData.avatar_url = `/uploads/avatars/${req.file.filename}`;
        }

        if (updateData.social_links && typeof updateData.social_links === 'string') {
          try {
            updateData.social_links = JSON.parse(updateData.social_links);
          } catch (e) {
            return res.status(400).json({ error: 'Invalid social_links format' });
          }
        }

        await Member.update(id, updateData);
        
        await AdminLog.create(
          req.user.userId,
          'update',
          'member',
          id,
          'Updated member details',
          req
        );

        res.json({ message: 'Member updated successfully' });
      });
    } catch (err) {
      console.error('Update member error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async updateMemberStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!['active', 'inactive', 'suspended'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }

      await Member.updateStatus(id, status);
      
      await AdminLog.create(
        req.user.userId,
        'update_status',
        'member',
        id,
        `Changed status to ${status}`,
        req
      );

      res.json({ message: 'Member status updated successfully' });
    } catch (err) {
      console.error('Update status error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async deleteMember(req, res) {
    try {
      const { id } = req.params;
      await Member.delete(id);
      
      await AdminLog.create(
        req.user.userId,
        'delete',
        'member',
        id,
        'Deleted member',
        req
      );

      res.json({ message: 'Member deleted successfully' });
    } catch (err) {
      console.error('Delete member error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getMemberStats(req, res) {
    try {
      const stats = await Member.getStats();
      res.json(stats);
    } catch (err) {
      console.error('Get stats error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = new MemberController();