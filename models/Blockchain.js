const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const BlockchainSchema = new Schema({
    previoushash : {
        type : String ,
        required : true
    } , 
    itemid : {
        type : String ,
        required : true
    } ,
    qty : {
        type : String ,
        required : true
    } ,
    price : {
        type : String ,
        required : true
    } ,
    loc : {
        type : String ,
        required : true ,
        default : "Ernakulam"
    } ,
    hash : {
        type : String ,
        required : true
    } ,
    nonce : {
        type : Number ,
        required : true
    } ,
    timestamp : {
        type : Date ,
        required : true ,
        default : Date.now
    }


})

module.exports = Blockchain = mongoose.model('blockchain' , BlockchainSchema)