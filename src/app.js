const express = require("express");
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const angDir = path.join(__dirname,"./testProject");
app.use(express.static(angDir));
app.get('',(req,res) => {
    res.send("HI,Welcome to heroku!")
})
app.listen(port,()=> {
    console.log(`Server runs:${port}`)
})