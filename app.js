const { error } = require("console");
const express = require("express");
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser')
// const session = require('express-session')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const alert = require('alert')
const app = express();
const port = 80;

// app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Digvijay19$',
    database: 'project'
});

// For using static files
app.use("/static", express.static("static"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cookieParser('secret'))
// app.use(session({ cookie: { maxAge: null } }))
// //flash message middleware
// app.use((req, res, next) => {
//     res.locals.message = req.session.message
//     delete req.session.message
//     next()
// })

const handlebars = require('express3-handlebars').create()
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')


//set view directory
// app.set("view", path.join(__dirname, "view"));

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/index", (req, res) => {
    res.render('index');
});
app.get("/booking", (req, res) => {
    res.render('booking');
});
app.get("/contact", (req, res) => {
    res.render('contact');
});
app.get("/menu", (req, res) => {
    res.render('menu');
});
app.get("/service", (req, res) => {
    res.render('service');
});
app.get("/team", (req, res) => {
    res.render('team');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/testimonial", (req, res) => {
    res.render('testimonial');
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

    const sql = 'INSERT INTO customer (name, email,Contact_number,Address) VALUES (?,?,?,?)';
    const values = [Name, Email, Contact_number, Address];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return results;
        }
        // alert("message is recieved successfully");
        // window.alert("message is recieved successufully");
        // return re.render('ndow.alert("message is recieve');
        return res.redirect('/contact');
        //res.json({ message: 'Data inserted successfully' });
    });
});
app.post('/booking', (req, res) => {
    const { Name, Email, Date, Number_of_people, Special_request } = req.body;

    const sql = 'INSERT INTO booking (name, email, Date, Number_of_people, Special_request) VALUES (?,?,?,?,?)';
    const values = [Name, Email, Date, Number_of_people, Special_request];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return results;
        }
        return res.redirect('/contact');
    });
});
app.post('/index', (req, res) => {
    const { Name, Email, Date, Number_of_people, Special_request } = req.body;

    const sql = 'INSERT INTO booking (name, email, Date, Number_of_people, Special_request) VALUES (?,?,?,?,?)';
    const values = [Name, Email, Date, Number_of_people, Special_request];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return results;
        }
        return res.redirect('/contact');
    });
});
app.post('/', (req, res) => {
    const { Name, Email, Date, Number_of_people, Special_request } = req.body;

    const sql = 'INSERT INTO booking (name, email, Date, Number_of_people, Special_request) VALUES (?,?,?,?,?)';
    const values = [Name, Email, Date, Number_of_people, Special_request];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return results;
        }
        return res.redirect('/contact');
    });
});
app.listen(port, () => {
    console.log(`this application started successfully on port ${port}`);
});