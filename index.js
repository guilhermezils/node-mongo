const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 7000 // const port = process.env.PORT || 7000 ** for production/deploying 

//cluster connection/database
const uri =  "mongodb+srv://guilhermezils:qweasdzxc@cluster0.qnb59.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const { schema } = mongoose

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
 })

 const User = mongoose.model('User', userSchema)

app.use(cors())
app.use(express.json())


//easier way to connect
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB Connected"))
    .catch(console.error)


app.get('/users', (request, response) => {
    User.find({}) //empty obj to get the entire collection
        .then(users => response.json(users))

})


app.post(() => '/pirates', (request, response) => { 
    const { user } = request.body
    User.create(user)
        .then(pirate => response.json(user))// could also do response.send(user)
})


app.listen(port, () => console.log(`NODE App running on ${port}`))
