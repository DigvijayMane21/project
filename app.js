const { error } = require("console");
const express = require("express");
const mysql = require('mysql2');
const path = require("path");
const app = express();
const port = 80;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Digvijay19$',
    database: 'project'
});


// For using static files
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//set the templete engine as pug
// app.set("view engine", "html");

//set view directory
app.set("view", path.join(__dirname, "view"));

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
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "view/about.html"));
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
/*
app.post('/contact', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var Contant_number = req.body.Contant_number;
    var message = req.body.message;
    console.log("name");
    connection.connect((error) => {
        if (error) throw error;
        var sql = "INSERT INTO customer values('" + name + "','" + email + "','" + Contant_number + "','" + message + "')"
        connection.query(sql, function (error, result) {
            if (error) throw error;
            res.send('Customer have been registered successfully' + result.insertId);
        })
    })
});
*/

app.post('/contact', (req, res) => {
    const { Name, Email, Contact_number, Address } = req.body;

    const sql = 'INSERT INTO customer (name, email,Contact_number,Address) VALUES (?, ?,?,?)';
    const values = [Name, Email, Contact_number, Address];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return results;
        }
        return results;
        //res.json({ message: 'Data inserted successfully' });
    });
});
app.listen(port, () => {
    console.log(`this application started successfully on port ${port}`);
});