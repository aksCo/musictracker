
const express = require('express');
const router = express.Router();

// Load entry model
const song = require('../../models/entry');

// @route GET api/entries/test
// @description tests entries route
// @access Public
router.get('/test', (req, res) => res.send('entry route testing!'));

// @route GET api/entries
// @description Get all entries
// @access Public
router.get('/', (req, res) => {
    song.find()
        .then(songs => res.json(songs))
        .catch(err => res.status(404).json({ noentriesfound: 'No entries found' }));
});

// @route GET api/entries/:id
// @description Get single entry by id
// @access Public
router.get('/:id', (req, res) => {
    song.findById(req.params.id)
        .then(song => res.json(song))
        .catch(err => res.status(404).json({ nosongfound: 'No Song Found' }));
});

// @route GET api/entries
// @description add/save entry
// @access Public
router.post('/', (req, res) => {
    song.create(req.body)
        .then(song => res.json({ msg: 'entry added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this entry' }));
});

// @route GET api/entries/:id
// @description Update entry
// @access Public
router.put('/:id', (req, res) => {
    song.findByIdAndUpdate(req.params.id, req.body)
        .then(song => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/entries/:id
// @description Delete entry by id
// @access Public
router.delete('/:id', (req, res) => {
    song.findByIdAndRemove(req.params.id, req.body)
        .then(entry => res.json({ mgs: 'entry entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a entry' }));
});

module.exports = router;