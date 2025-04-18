let express =require('express')
var mongoose =require('mongoose')
var cors = require('cors')
require('dotenv').config()

const projectRoutes =require('./App/routes/web/ProjectROutes')
const EnquriyRouts = require('./App/routes/web/EnquiryRouts')
// let EnquiryModele=require('./App/modles/Enquiry.models')



let app = express()
app.use(express.json())
app.use(cors({
  origin: 'https://event-full-stack-thp4.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true, // if you're using cookies or auth headers
}));
app.use("/web/api/run",projectRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/UserEnquiry").then(()=>{
    console.log('mongo db is connected')
    app.listen(8000,()=>{
        console.log("Server is running ")
    })
})
