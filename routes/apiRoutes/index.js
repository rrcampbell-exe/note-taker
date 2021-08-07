const router = require('express').Router();
const notes = require('../apiRoutes/notes.js');

router.use(notes);

module.exports = router