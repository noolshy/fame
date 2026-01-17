const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/submit', appController.submitApplication);
router.get('/', authMiddleware, appController.getAllApplications);
router.get('/stats', authMiddleware, appController.getApplicationStats);
router.get('/:id', authMiddleware, appController.getApplication);
router.patch('/:id/status', authMiddleware, adminMiddleware, appController.updateApplicationStatus);
router.post('/:id/approve', authMiddleware, adminMiddleware, appController.approveApplication);
router.delete('/:id', authMiddleware, adminMiddleware, appController.deleteApplication);

module.exports = router;