const express = require('express')
const path = require('path');


const app = express()

app.use(express.static("public"));

const port = 3000 || process.env.PORT

app.listen(port, () => {console.log(`The server is running at port ${port}`)})

