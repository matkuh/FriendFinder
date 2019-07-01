var path = require("path")

module.exports = function(app) {

app.get("/survey", function (req, res) {
    if(err){
    res.sendFile(path.join(__dirname, "home.html"));
    }
    else {
    res.sendFile(path.join(__dirname, "survey.html"));
    }
});

}
