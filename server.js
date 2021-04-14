const app = require("./index")
 
const HTTP_PORT = process.env.PORT || 8080;
 
const onHttpStart = () => {
   console.log(`Server has started and is listening on port ${HTTP_PORT}`)
}
app.listen(HTTP_PORT, onHttpStart);
