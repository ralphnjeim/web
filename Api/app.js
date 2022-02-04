// create an express app
const express = require("express")
var cors = require('cors')
var app = express()

app.use(cors())

var xlsx = require("xlsx");
var dataPathExcel = "data.xlsx"
var file = xlsx.readFile(dataPathExcel);
var sheetName = file.SheetNames;
let data = [];

for (let i = 0; i < sheetName.length; i++) {
    const temp = xlsx.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        data.push(res)
    })
}

//var json = console.log(data);

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.get("/data", function (req, res) {
    res.json(data)
})

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));