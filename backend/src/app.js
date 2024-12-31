const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { rateLimit } = require('express-rate-limit');
const authRoutes = require('./routes/auth');
const departmentRoutes = require('./routes/departments');
const cityRoutes = require('./routes/cities');
const vendorRoutes = require('./routes/vendors');
const invoiceRoutes = require('./routes/invoices');
const { errorHandler } = require('./middleware/errorHandler');
const { authenticateJWT } = require('./middleware/auth');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/departments', authenticateJWT, departmentRoutes);
app.use('/api/cities', authenticateJWT, cityRoutes);
app.use('/api/vendors', authenticateJWT, vendorRoutes);
app.use('/api/invoices', authenticateJWT, invoiceRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
