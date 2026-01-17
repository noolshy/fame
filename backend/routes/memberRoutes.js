const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', authMiddleware, adminMiddleware, memberController.createMember);
router.get('/', authMiddleware, memberController.getAllMembers);
router.get('/stats', authMiddleware, memberController.getMemberStats);
router.get('/:id', authMiddleware, memberController.getMember);
router.put('/:id', authMiddleware, adminMiddleware, memberController.updateMember);
router.patch('/:id/status', authMiddleware, adminMiddleware, memberController.updateMemberStatus);
router.delete('/:id', authMiddleware, adminMiddleware, memberController.deleteMember);

module.exports = router;