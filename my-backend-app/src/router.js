const express = require('express');
const router = express.Router();

const items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' }
];

router.get('/items', (req, res) => {
    res.json(items);
});

module.exports = router;
