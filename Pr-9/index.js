const express = require("express");
const connectDB = require("./config/db");
const app = express()
const port = 9000;
connectDB()

//Configuration
const cloudinary = require('cloudinary').v2


// Configuration
cloudinary.config({ 
  cloud_name: 'deptzdcpd', 
  api_key: '333236384799212', 
  api_secret: 'ze33IoHY5Y25aHbDTB4XdeR7ZGE' // Click 'View API Keys' above to copy your API secret
});

const cors = require('cors')
app.use(cors());

app.use(express.json());

app.set('view engine', 'ejs')
app.use(express.urlencoded())


app.use('/', require('./routes/indexRoutes'))


app.listen(port, (err) => {
  if (err) console.log(err);

  console.log(`server is running on port ${port}`)
})
