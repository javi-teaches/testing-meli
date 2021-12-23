const express = require ("express");
const path = require ("path");

const app = express ();

const publicPath = path.join (__dirname, "/public");
app.use (express.static (publicPath));



app.listen (process.env.PORT ||3000, function() {
    console.log ("servidor corriendo en el puerto 3000");
})

app.get ("/", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/home.html")); 
} )

app.post ("/procesar", (req, res) => {
    res.send ("enviaste información");
})

app.get ("/register", (req, res) => {
    res.sendfile (path.resolve (__dirname, "./views/register.html")); 
})
app.get ("/login", (req, res) => {
    res.sendfile (path.resolve (__dirname, "./views/login.html")); 
})