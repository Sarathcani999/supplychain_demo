const router = require('express').Router()
const auth = require('../middleware/auth')

// Note Model
const Note = require('../../models/Notes')

// @route GET api/notes
// @desc Get all notes
// @access Public
router.get('/' , auth , (req,res) => {
    Note.find({created_by : req.user._id})
        .sort({
            date : -1
        })
        .then(notes => res.json(notes))
        .catch(err => res.json({
            "message" : err.message
        }))
})

// @route POST api/notes
// @desc Create an note
// @access Public
router.post('/' , auth , (req,res) => {

    console.log(req.body)

    const newNote = new Note({
        body : req.body.body , 
        created_by : req.user._id
    })

    newNote.save()
        .then(note => {
            console.log("IN SUCC")
            res.status(201).json(note)
        })
        .catch(err => res.status(400).json({"message" : err.message}))

})

// @route DELETE api/notes/:id
// @desc Delete an note
// @access Public
router.delete('/:id' , auth , (req,res) => {


    Note.findById(req.params.id)
        .then(note => note.remove()
                             .then(() => res.json({"id" : note._id}))
        ).catch(err => res.status(404).json({ success : false , message : err.message}))
        
})





module.exports = router