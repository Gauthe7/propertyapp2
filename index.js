// import cors
const cors=require('cors')




// import data service file from service folder

// we use a variable to store the data 

const dataServices = require("./service/dataservice")

//.............................................................//




//..............................................................//



// import express

const express = require('express');
const { response } = require("express");
const dataservice = require('./service/dataservice');

//..................................................................//



// create app

const app = express()


// connect front end 
app.use(cors({origin:'http://localhost:4200'}))

//.....................................................................//



// to convert json data we use ..

app.use(express.json())





app.post('/addlisting',(req,res)=>{
    dataServices.addlisting(req.body.id,req.body.title,req.body.price,req.body.location,req.body.details).then(result=>{
        res.json(result)
    })
})

app.get('/loadproperty',(req,res)=>{
    dataServices.loadproperty().then(result=>{
        res.json(result.message)
    })
})

app.post('/delete',(req,res)=>{
    dataservice.deleteprop(req.body.id).then(result=>{
        res.json(result.message)
})
})

app.listen(3000, () => {

    console.log("server working at prt number 3000");

})
