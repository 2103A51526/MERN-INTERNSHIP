const express = require('express');
const port = 5001;
const app = express()
app.use(express.json())

const laptop = [{
    title:"hp laptop",
    price:79999,
    color:"silver",
    data_of_delivery: "28th october 2024"
},

{
    title:"hp laptop",
    price:75445,
    color:"silver-black",
    data_of_delivery: "28th october 2024"

}]

const biscuits = {
    title: "parle-G",
    price: 10,
    ratings: 4/5
}

app.get ('/biscuits' ,(req,res)=>{
    res.send(biscuits);
})

app.get('/laptop',(req,res)=>{
    res.send(laptop)
})

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
})


// password of database
// 3vnjs9j0g24WF0v5
// url encoded 
// mongodb+srv://vk8918906:<db_password>@cluster0.olkrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0