// Dependencies
const path = require('path');
const router = require('express').Router();

// This has to be on the top than the other routers
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// If no matching route is found default to home page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


module.exports = router;