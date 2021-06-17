import axios from 'axios'
import sha256 from 'crypto-js/sha256';
const difficulty = 4 ;

const calculateHash = () => {

}

export const mine = (pendingBlock) => {

	console.log("Mining started")

	// getLatestBlock
	axios.get('/api/blockchain/latestBlock' )
	    .then(res => {

	    	var previoushash=res.data.previoushash
	    	var nonce=0

	    	var hash = sha256(previoushash).toString()

	    	// computation power used here
	    	// Genesis Block
	    	if (previoushash == "0") {

				while (hash.substring(0,difficulty) !== Array(difficulty + 1 ).join("0")){
					nonce++;
					hash = sha256(previoushash + nonce).toString();
				}	

	    	} else {

		    	while (hash.substring(0,difficulty) !== Array(difficulty + 1 ).join("0")){
					nonce++;
					hash = sha256(previoushash + nonce + JSON.stringify(pendingBlock)).toString();
				}	    		
	    	}

	    	console.log(hash)

	    	var block = {
	    		previoushash ,
	    		hash ,
	    		itemid : pendingBlock.itemid ,
	    		qty : pendingBlock.qty ,
	    		price : pendingBlock.price ,
	    		loc : pendingBlock.loc ,
	    		nonce
	    	}

	    	console.log(block)

	    	// Update the blockchain network
	    	axios.post("/api/blockchain/" , block)
	            .then(res => { 
	                console.log(res)
	            }).then(_ => {
	            	// delete req for 
	            	var b = {
	            		blockid : pendingBlock._id
	            	}

	            	console.log(b)
	            	console.log(pendingBlock)

	            	axios.post("/api/pendingblocks/delete" , b)
	            		.then(block => {
	            			return true
	            		})
	            }).catch(err => {
	                console.log(err.message)
	            })
	        
	    })
	    .catch(err => {
	    	console.log(err.message)
	    })
		// getPendingBlock
		// do mining
		// add to the blockchain



}