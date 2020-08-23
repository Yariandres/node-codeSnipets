const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');  
    res.write('<html>');
    res.write('<head><title>Some title</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
    return res.end();
  };

  if(url === '/message' && method === 'POST') {

    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk);
    });

    req.on('end', (chunk) => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFileSync('message.txt', message);

    });
        
    res.statusCode = 302;
    res.setHeader('location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');  
  res.write('<html>');
  res.write('<head><title>Enter a message</title></head>');
  res.write('<body><h1>Hello this is a response from my Node.js Server</h1></body>');
  res.write('</html>'); 

  res.end();

  // process.exit();
});

const port = 3000;

server.listen(port);

// More resources
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

