let mongoose = require('mongoose')
let userEnquriySchema = mongoose.Schema({
   
    name:{
        type:String ,
       required:true
    },
    email:{
        type :String ,
       required :true,
       unique:true
    },
    phone:{
        type:String ,
        required:true
    },
    message:{
        type:String ,
        required:true 
    }

})

let EnquiryModele=mongoose.model("enquires",userEnquriySchema)
module.exports=EnquiryModele