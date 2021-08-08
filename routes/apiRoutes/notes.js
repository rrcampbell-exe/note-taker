const router = require('express').Router();
const notes = require("../../db/db.json");
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// GET /api/notes should read the db.json file and return all saved notes as JSON.

router.get('/notes', (req, res) => {
    res.json(notes);
})

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you, like uuid).

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = req.body;
    notes.push(newNote)
    res.json(notes)
})

// DELETE 

router.delete('/notes/:id', (req, res) => {
    let noteId = req.params.id.toString(); 
    fs.readFile(path.join(__dirname, "../../db/db.json"), "utf8", (err, data) => {
        if (err) {
            throw new Error("Failed to read file!");
        }
        let noteData = JSON.parse(data)
        console.log('noteData has been parsed and appears as follows', noteData)
        const modData = noteData.filter(notes => notes.id !== noteId);
        console.log('modData has been defined successfully.')
        fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(modData), (err, data) => {
            if (err) {
                throw new Error(err);
            }
            res.json(modData);
        })
    })
})

module.exports = router