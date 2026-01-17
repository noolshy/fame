const Application = require('../models/Application');
const Member = require('../models/Member');
const AdminLog = require('../models/AdminLog');
const EmailService = require('../utils/emailService');
const { uploadAttachment } = require('../utils/imageUpload');

class ApplicationController {
  async submitApplication(req, res) {
    try {
      uploadAttachment(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }

        const appData = req.body;
        
        if (req.file) {
          appData.attachment_url = `/uploads/applications/${req.file.filename}`;
        }

        const existingMember = await Member.findByEmail(appData.email);
        if (existingMember) {
          return res.status(400).json({ error: 'Member with this email already exists' });
        }

        const result = await Application.create(appData);
        
        await EmailService.sendApplicationConfirmation(
          appData.email,
          result.application_id,
          appData.full_name
        );

        res.status(201).json({
          message: 'Application submitted successfully',
          application_id: result.application_id,
          id: result.id
        });
      });
    } catch (err) {
      console.error('Submit application error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getAllApplications(req, res) {
    try {
      const { status, search, startDate, endDate, limit } = req.query;
      const filters = {};
      
      if (status) filters.status = status;
      if (search) filters.search = search;
      if (startDate && endDate) {
        filters.startDate = startDate;
        filters.endDate = endDate;
      }
      if (limit) filters.limit = parseInt(limit);

      const applications = await Application.getAll(filters);
      res.json(applications);
    } catch (err) {
      console.error('Get applications error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getApplication(req, res) {
    try {
      const { id } = req.params;
      const application = await Application.findById(id);
      
      if (!application) {
        return res.status(404).json({ error: 'Application not found' });
      }
      
      res.json(application);
    } catch (err) {
      console.error('Get application error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async updateApplicationStatus(req, res) {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;

      if (!['pending', 'approved', 'rejected'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }

      const application = await Application.findById(id);
      if (!application) {
        return res.status(404).json({ error: 'Application not found' });
      }

      await Application.updateStatus(id, status, req.user.userId, notes);
      
      await EmailService.sendStatusUpdate(
        application.email,
        application.application_id,
        status,
        notes
      );

      await AdminLog.create(
        req.user.userId,
        'update_status',
        'application',
        id,
        `Changed application status to ${status}`,
        req
      );

      res.json({ message: 'Application status updated successfully' });
    } catch (err) {
      console.error('Update status error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async approveApplication(req, res) {
    try {
      const { id } = req.params;
      const { notes } = req.body;

      const application = await Application.findById(id);
      if (!application) {
        return res.status(404).json({ error: 'Application not found' });
      }

      await Application.updateStatus(id, 'approved', req.user.userId, notes);
      
      const memberData = {
        full_name: application.full_name,
        email: application.email,
        phone: application.phone,
        birth_date: application.birth_date,
        motivation: application.motivation,
        join_date: new Date().toISOString().split('T')[0],
        status: 'active'
      };

      const memberResult = await Member.create(memberData);
      
      await Application.update(id, { processed_by: req.user.userId, processed_at: new Date().toISOString() });

      await EmailService.sendStatusUpdate(
        application.email,
        application.application_id,
        'approved',
        notes || 'Congratulations! You have been accepted as a member.'
      );

      await AdminLog.create(
        req.user.userId,
        'approve_application',
        'application',
        id,
        `Approved application and created member ${memberResult.member_id}`,
        req
      );

      res.json({
        message: 'Application approved and member created',
        member_id: memberResult.member_id,
        application_id: application.application_id
      });
    } catch (err) {
      console.error('Approve application error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async deleteApplication(req, res) {
    try {
      const { id } = req.params;
      await Application.delete(id);
      
      await AdminLog.create(
        req.user.userId,
        'delete',
        'application',
        id,
        'Deleted application',
        req
      );

      res.json({ message: 'Application deleted successfully' });
    } catch (err) {
      console.error('Delete application error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }

  async getApplicationStats(req, res) {
    try {
      const stats = await Application.getStats();
      res.json(stats);
    } catch (err) {
      console.error('Get stats error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = new ApplicationController();