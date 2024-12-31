const db = require('../db');

const createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;
        
        const result = await db.query(
            'INSERT INTO departments (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );
        
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create department error:', error);
        res.status(500).json({ error: 'Failed to create department' });
    }
};

const getDepartments = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM departments ORDER BY name');
        res.json(result.rows);
    } catch (error) {
        console.error('Get departments error:', error);
        res.status(500).json({ error: 'Failed to retrieve departments' });
    }
};

module.exports = {
    createDepartment,
    getDepartments
};