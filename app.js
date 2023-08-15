const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For using static files
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//set the templete engine as pug
// app.set("view engine", "html");

//set view directory
// app.set("view", path.join(__dirname, "view"));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/index.html"));
});
app.get("/index", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/index.html"));
});
app.get("/booking", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/booking.html"));
});
app.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/contact.html"));
});
app.get("/menu", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/menu.html"));
});
app.get("/service", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/service.html"));
});
app.get("/team", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/team.html"));
});
app.get("/testimonial", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/testimonial.html"));
});
// app.get("/about", (req, res) => {
//     res.send("This is my first about of express app")
// });
// app.post("/about", (req, res) => {
//     res.send("This is my post requist first about of express app")
// });
app.listen(port, () => {
    console.log(`this application started successfully on port ${port}`);
});