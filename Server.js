var exp=require("express");
var app=exp();

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/Demo.html")
})
app.listen(8900,function () {
    console.log("server is on");
})