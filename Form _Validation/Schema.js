const mongoose=require('mongoose')
const dataSchema=new mongoose.Schema({
    EmailorPhone:String,
    User:String,
    Password:String
})

module.exports=mongoose.model('Collection',dataSchema)