

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    const fs = require('fs');

    if(req.url === "/"){
        fs.readFile('index.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === "/about") {
        fs.readFile('about.html', (err, data) => {
            res.end(data)
        })
    } else if (req.url === "/contact-me") {
        fs.readFile('contact-me.html', (err, data) => {
            res.end(data)
        })
    } else {
        fs.readFile('404.html', (err, data) => {
            res.end(data)
        })
    };

})

server.listen(8080, () => {
    console.log(`Server running at port 8080`)
})


