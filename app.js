//jshint esversion: 6
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

var workitems = [];
var items = [];

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        day: 'numeric',
        year: 'numeric',
        weekday: 'long',
        month: 'long'
    };

    var day = today.toLocaleDateString("en-GB", options);

    res.render("list", {
        taskTitle: day,
        newlistitem: items
    });


  
});



app.post("/", function (req, res) {
        var item = req.body.addlist;
        if (req.body.btn==="WORK"){
            workitems.push(item)
            res.redirect("/work")
        }else
       { items.push(item);

        res.redirect("/");
}

        console.log(items);
});

app.get("/work",function(req,res){
   
   
    res.render("list", {
        taskTitle:"WORK LIST",
        newlistitem: workitems
    }); 

})










app.listen(process.env.PORT || 3000, function () {
    console.log("port is live");

});