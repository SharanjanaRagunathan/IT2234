const express = require('express');
const router = express.Router();
const { getUserSummary } = require('./userService');

router.get('/summary/:id', (req, res) => {
    const userId = req.params.id;
    const summary = getUserSummary(userId);

    if (!summary) {
        return res.status(404).json({ error: 'SORRY, No Data Found!!!' });
    }

    res.json(summary);
});

module.exports = router;