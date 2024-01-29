const express = require("express");
const app = express();
const PORT = 4000;


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// app.use('/assets', express.static(__dirname + '/public'));
// const path = require('path')
// app.use('/public', express.static(path.join(__dirname, 'public')))

const userRoutes = require("./routes/userRoutes");
app.use(userRoutes);


app.get('/', (req, res) => {
    res.send("<h1>Server Access Okay</h1>");
})

app.use((req, res, next) => {
    res.send("<h1>Page Not Found</h1>");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})