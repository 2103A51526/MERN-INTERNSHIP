const http = require('http');
const express = require('express')
const port = 4000;
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.get('/products', (req,res)=>{
    res.send("hi i am your products");
})


app.get('/mobile',(req,res)=>{
    res.send(200);
})

app.get('/mobiles/',(req,res)=>{
    res.json([
        {
          "id": 1,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "age": 29,
          "address": {
            "street": "123 Main St",
            "city": "Springfield",
            "state": "IL",
            "zipcode": "62701"
          },
          "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacinia arcu."
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "age": 34,
          "address": {
            "street": "456 Elm St",
            "city": "Metropolis",
            "state": "NY",
            "zipcode": "10001"
          },
          "profile_picture": "https://randomuser.me/api/portraits/women/2.jpg",
          "bio": "Vestibulum viverra est eu justo fermentum, euismod lacinia nisi suscipit."
        }
      ]
      )
})
app.post('/signup',(req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    res.send(req.body);
})

app.post('/login',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password
  res.send(req.body);
})

app.listen(port, ()=>{
    console.log( `server is running in http://localhost:${port}`);
});