const router = require('express').Router();
const notes = require("../../db/db.json")
const { v4: uuidv4 } = require('uuid');

// GET /api/notes should read the db.json file and return all saved notes as JSON.

router.get('/notes', (req, res) => {
    // console.log(uuidv4())
    res.json(notes);
})

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you, like uuid).

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = req.body;
    notes.push(newNote)
    res.json(notes)
})

module.exports = router