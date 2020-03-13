const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.get('',(req,res) => {
    res.send("HI,Welcome to heroku!")
})
app.listen(port,()=> {
    console.log(`Server runs:${port}`)
})