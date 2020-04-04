const express = require("express")

// Server name
const app = express()

app.use(express.static("public"))

// Routes
app.get("/", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/views/home.html')
})

app.get("/about", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/gallery", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/views/gallery.html')
})

// Start server
app.listen(3000, () => {
    console.log("App listening on port 3000");
})