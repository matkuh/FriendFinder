var express = require("express");
var path = require("path");



var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

var friends = [];



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});