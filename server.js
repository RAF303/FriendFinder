var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 1500;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("WE LIVE: " + PORT);
});