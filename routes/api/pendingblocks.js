const router = require('express').Router()
const auth = require('../middleware/auth')


const Pendingblocks = require('../../models/Pendingblocks')

router.post("/delete" , (req,res) => {
	console.log("For deletion" , req.body)

	Pendingblocks.findOneAndRemove({_id:req.body.blockid})
    .then( doc => {
    	console.log("SUCCESSFULLY REMOVED FROM PENDING REQ" , doc)
    	return doc
    } )
})

// Add a Block to the blockchain
router.post('/' , (req,res) => {

    console.log(req.body)

    const newPendingBlock = new Pendingblocks({
        itemid : req.body.itemid ,
        qty : req.body.qty ,
        price : req.body.price ,
        loc  : req.body.loc 
    })

    console.log(newPendingBlock)

    newPendingBlock.save()
        .then(block => {
            console.log("BLOCK ADDED SUCCESSFULLY TO PENDING BLOCK")
            res.status(201).json(block)
        })
        .catch(err => res.status(400).json({"message" : err.message}))

})


router.get('/' , (req,res) => {
	Pendingblocks.find({})
		.then(results => {
			return res.json(results)
		}).catch(err=> {
			return res.json({"message" : err.message})
		})
})



module.exports = router