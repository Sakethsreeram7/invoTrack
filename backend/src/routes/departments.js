const express = require('express');
const router = express.Router();
const { requireAdmin } = require('../middleware/auth');
const { 
    createDepartment,
    getDepartments,
    getDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/departments');

router.post('/', requireAdmin, createDepartment);
router.get('/', getDepartments);
router.get('/:id', getDepartment);
router.put('/:id', requireAdmin, updateDepartment);
router.delete('/:id', requireAdmin, deleteDepartment);

module.exports = router;
