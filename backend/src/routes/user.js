const express = require('express');
const axios = require('axios');


const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = Array.isArray(resp.data) ? resp.data.slice(0, 5) : [];
        return res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err?.message || err);
        return res.status(500).json({ error: 'Failed to fetch users' });
    }
});

module.exports = router;
