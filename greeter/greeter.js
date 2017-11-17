const http = require('http');
const { URL } = require('url');
const port = 3000;

const server = new http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const myUrl = new URL(req.url, 'http://localhost:3000')
    // console.log(myUrl)
    console.log(JSON.stringify(URL))
    const name = myUrl.searchParams.get('name')
    if (name) {
        res.write(`<h1>Hello ${name}</h1>`)
        res.end()
    } else {
        res.write(`<h1>Please provide a URLname</h1>`)
        res.end()
    }
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})