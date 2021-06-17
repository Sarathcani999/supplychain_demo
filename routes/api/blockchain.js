const router = require('express').Router()
const auth = require('../middleware/auth')

const Blockchain = require('../../models/Blockchain')

const Note = require('../../models/Notes')

const getLatestBlock = () => {
    return Blockchain.find({})
        .sort({
            timestamp : -1
        })
        .then(blocks => {
            if (blocks.length == 0) {
                return {previoushash:"0"}
            }
            return blocks[0]
        })
        
}

// Add a Block to the blockchain
router.post('/' , (req,res) => {

    console.log(req.body)

    const newBlockchain = new Blockchain({
        previoushash : req.body.previoushash ,
        itemid : req.body.itemid ,
        qty : req.body.qty ,
        price : req.body.price ,
        loc  : req.body.loc ,
        hash : req.body.hash ,
        nonce : req.body.nonce
    })



    newBlockchain.save()
        .then(block => {
            console.log("BLOCK ADDED SUCCESSFULLY TO BLOCKCHAIN")
            res.status(201).json(block)
        })
        .catch(err => res.status(400).json({"message" : err.message}))

})

// Get the latest block from the blockchain
router.get('/latestBlock' , (req,res) => {

    getLatestBlock()
        .then(block => {
            console.log("Latest Block" , block)
            return res.json(block)
        })
        .catch(err => res.status(400).json({
            "message" : err.message
        }))

})


// Get the latest block from the blockchain
router.get('/test' , (req,res) => {

    Note.find({})
        .sort({
            date : -1
        })
        .then(notes => res.json(notes[0]))
        .catch(err => res.json({
            "message" : err.message
        }))

})

module.exports = router