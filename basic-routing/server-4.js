const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
  
    if (req.url !== "/") {
        fs.readFile('.' + req.url + '.html', (err, data) => {
            //          ./index.html --> serve the page
            //          ./adf.html --> (not existing page) Show error page
            if (err) {
                resp.write("Wrong request / Page does not exists")
                resp.end()
            } else {
                resp.write(data)
                resp.end()
            }
        })
    } else {
        fs.readFile('./index.html', (err, data) => {
            resp.write(data)
            resp.end()
        })

    }

})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})