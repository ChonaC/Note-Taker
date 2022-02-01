// Dependencies
const router = require('express').Router();

const saveData = require('../develop/db/saveData');

// GET request
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then((note) => {
            return res.json(note)
        })
        .catch((err) => res.status(500).json(err));
});

// POST request
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

// Bonus - DELETE request
router.delete('/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});


module.exports = router;