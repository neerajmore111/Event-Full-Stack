let express= require('express')
const {enquiryInsert,enquiryRead,enquiryDelete,enquiryUpdate}=require('../../controllers/web/UersInquiryControler')
let EnquireyRoutes =express.Router()


EnquireyRoutes.post("/insert",enquiryInsert) 
EnquireyRoutes.get("/ReadData",enquiryRead)
EnquireyRoutes.delete("/delete/:id",enquiryDelete)
EnquireyRoutes.put("/insert-data/:id",enquiryUpdate)

module.exports=EnquireyRoutes