const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  const url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');  
    res.write('<html>');
    res.write('<head>First message</head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
    return res.end();
  };
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

