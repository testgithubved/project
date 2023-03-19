require("dotenv").config();
const app = require("express")();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyparser.json());


 app.get("/",  (req,res)=>{
    res.send("its is working")
 })

app.listen(process.env.PORT,async ()=>{
    console.log("server is running")
    await mongoose.connect(process.env.MONGO_VED_URL,{ 
        
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
    });
    console.log("connected to database")

})