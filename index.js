const express = require("express");
const app = express();
const indexRouter = require('./routes/indexRouter')
const port = 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use("/",indexRouter);


app.listen(port,()=>{
    console.log(`Server open port ${port}`)
})