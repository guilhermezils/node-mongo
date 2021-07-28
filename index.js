const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 7000 // const port = process.env.PORT || 7000 ** for production/deploying 

const uri =  "mongodb+srv://guilhermezils:qweasdzxc@cluster0.qnb59.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.listen(port, () => console.log(`running on ${port}`))
