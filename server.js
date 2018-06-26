let express = require ('express');

let app = express();

const PORT = 5000;

app.use(express.static('server/public'))  //making a request

app.listen(PORT, function () {
 console.log('server is running', PORT)
})