const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');
const db = require('../db');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const result = await db.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        
        const user = result.rows[0];
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const validPassword = await bcrypt.compare(password, user.password_hash);
        
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            jwtSecret,
            { expiresIn: '24h' }
        );
        
        res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};

const register = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        
        // Check if user already exists
        const existingUser = await db.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        
        // Insert new user
        const result = await db.query(
            'INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) RETURNING id, email, role',
            [email, passwordHash, role]
        );
        
        const user = result.rows[0];
        
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            jwtSecret,
            { expiresIn: '24h' }
        );
        
        res.status(201).json({ token, user });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

module.exports = { login, register };