const express=require("express")
const app=express()
const router=require("./router")
const bodyParser = require("body-parser");
const debug = require('debug')('my-application');


// post传递参数
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use("/api",router)
app.listen(3200,function(){
    debug('Express server listening on port ' + 3000);
})