const router = require('express').Router();
let notes = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid');

// GET notes

router.get('/notes', (req, res) => {
    res.json(notes);
})

// POST notes

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = req.body;
    notes.push(newNote);
    res.json(notes);
})

// DELETE notes

router.delete('/notes/:id', (req, res) => {
    let noteId = req.params.id.toString(); 
    const modData = notes.filter(notes => notes.id !== noteId);
    notes = modData
    res.json(modData);
})

module.exports = router