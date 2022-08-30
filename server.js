/**
 * Loading the required dependencies
 */
const express = require("express");
const app = express();
app.use(express.json());


/**
 * Tell app which routes to call, when the request comes
 */
require("./routes/idea.route")(app);



/**
 * Starting the server
 */
const PORT = 7777 ;

app.listen(PORT, ()=>{
    console.log("App strated on the port no :  ", PORT);
})