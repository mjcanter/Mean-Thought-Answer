const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static(__dirname + '/public/dist'));

/*app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');*/

//////DataBase Stuff///
require('./server/config/mongoose.js');

///routes ///

var routes = require('./server/config/routes.js')(app);


///server///
app.listen(8000, () => {
 console.log("listening on port 8000");
});
