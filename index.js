

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')

//     const fs = require('fs');

//     if(req.url === "/"){
//         fs.readFile('index.html', (err, data) => {
//             res.end(data)
//         })
//     } else if (req.url === "/about") {
//         fs.readFile('about.html', (err, data) => {
//             res.end(data)
//         })
//     } else if (req.url === "/contact-me") {
//         fs.readFile('contact-me.html', (err, data) => {
//             res.end(data)
//         })
//     } else {
//         fs.readFile('404.html', (err, data) => {
//             res.end(data)
//         })
//     };

// })

// server.listen(8080, () => {
//     console.log(`Server running at port 8080`)
// })


const express = require("express");
const path = require('path')
const app = express();


app.get("/", (req, res) => res.sendFile(path.join(__dirname,'index.html')));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname,'about.html')));
app.get("/contact-me", (req, res) => res.sendFile(path.join(__dirname,'contact-me.html')));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname,'about.html')));

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

const PORT = 8080;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
