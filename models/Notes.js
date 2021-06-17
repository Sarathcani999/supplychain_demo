const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    body : {
        type : String ,
        required : true
    } ,
    date : {
        type : Date ,
        default : Date.now()
    } ,
    created_by : {
        type : Schema.Types.ObjectId, 
        ref: 'user' ,
        required : true
    }
})

module.exports = Note = mongoose.model('note' , NoteSchema)