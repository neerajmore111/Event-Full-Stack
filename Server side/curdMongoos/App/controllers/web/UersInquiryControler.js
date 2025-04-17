const EnquiryModele = require("../../modles/Enquiry.models")

let enquiryInsert=(req,res)=>{

    let{sname,sEmail,sphone,sMessage}=req.body
    let enquire=new EnquiryModele({
        name:sname,
        email:sEmail,
        phone:sphone,
        message:sMessage
    })
    enquire.save().then(()=>{
        res.send({status:1,msg:"data has been saved"})
    }).catch((err)=>{
       res.send({status:0,msg:"error while save=ing the data ",err })
    })
}


let enquiryRead =async(req,res)=>{

    let enquireList=await EnquiryModele.find()

    res.status(200).json({status:1,msg:"Enquire list", data:enquireList})
}

let enquiryDelete =async(req,res)=>{
    let enquireId= req.params.id
    let DeleteId=await EnquiryModele.deleteOne({_id:enquireId})

    res.send({status:1,msg:"entery deleted Sucessfully",id:enquireId,Delres:DeleteId})
}

let enquiryUpdate=async(req,res)=>{
    let enquireId=req.params.id
    let{sname,sEmail,sphone,sMessage}=req.body
    let updateId={
     name:sname,
     email:sEmail,
     phone:sphone,
     message:sMessage
    }
 
    let updateRes= await EnquiryModele.updateOne({_id:enquireId},updateId)
 
    res.send({status:1,msg:"entery udated Sucessfully",id:enquireId,updateRes})
 
 
 }

 module.exports = { enquiryInsert, enquiryRead, enquiryDelete, enquiryUpdate };
