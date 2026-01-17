const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/users', authMiddleware, adminMiddleware, adminController.getAllUsers);
router.post('/users', authMiddleware, adminMiddleware, adminController.createUser);
router.put('/users/:id', authMiddleware, adminMiddleware, adminController.updateUser);
router.delete('/users/:id', authMiddleware, adminMiddleware, adminController.deleteUser);

router.get('/logs', authMiddleware, adminMiddleware, adminController.getLogs);
router.get('/activity', authMiddleware, adminMiddleware, adminController.getRecentActivity);

router.get('/stats', authMiddleware, adminMiddleware, adminController.getDashboardStats);
router.get('/export/:type', authMiddleware, adminMiddleware, adminController.exportData);

module.exports = router;