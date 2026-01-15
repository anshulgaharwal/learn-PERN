//creating node js http server
import http from "http";//allow node to send and recieve http req

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});//response status and header
    res.end('Built a server in Node.js!');//sends the response and end it
});//callback function

server.listen(3000, () => console.log('Server is running on port http://localhost:3000'));
//start listening to req
//ip is building and port is apartment number
//comp act like a server, it listen to port
