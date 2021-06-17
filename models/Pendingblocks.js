const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const PendingblocksSchema = new Schema({
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
    timestamp : {
        type : Date ,
        required : true ,
        default : Date.now
    }


})

module.exports = Pendingblocks = mongoose.model('pendingblocks' , PendingblocksSchema)