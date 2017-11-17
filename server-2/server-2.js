const http = require ('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead (200, {'Conten-Type': 'text/html'});
    res.write('<h1>Welcome To My Site</h1>');
    res.write('<p>Content comming soon...</p>');
    res.end();
})

server.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
});
