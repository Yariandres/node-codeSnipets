const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  debugger;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>You are on the / route <br> Create a user: </h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/create-user' && method === 'POST') {
        
    console.log('user has been created');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>User has been created </h1></body>');
    res.write('</html>');
    return res.end();  
      
  }  
  res.write('<html>');
  res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
  res.write('</html>');
  res.end();
  
}

module.exports = requestHandler;