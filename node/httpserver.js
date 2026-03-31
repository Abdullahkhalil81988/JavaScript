const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>helooooo abdullah <br> kia hal ha </h1>');

})
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})