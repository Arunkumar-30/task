require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/db');
const usersRoute = require('./src/routes/user');

const app = express();
app.use(cors());
app.use(express.json());

// health
app.get('/', (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || 'dev' }));

// API
app.use('/api/users', usersRoute);

// start server & DB
const PORT = process.env.PORT || 5000;
async function start() {
    try {
        await sequelize.authenticate();
        console.log('Sequelize connected to DB')
        // await sequelize.sync({ alter: true });
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error('Unable to connect to DB:', err);
        process.exit(1);
    }
}
start();
