const http = require('http');

//  HTTP server
const server = http.createServer((req, res) => {
  
  const URL = req.url;
  res.setHeader('Content-Type', 'text/html')
  // '/' default route

  if(URL === '/'){
    res.write(`<h1>Welctome to our server</h1>`);
    res.end();
  }

  if(URL === '/student'){
    res.write(`
    {
      Name: Filip,
      Lastname: Karakamchev,
      Subject: NodeJS,
      Academy: Qinshift
    }
    `);
    res.write(` 
    {
      Name: Kosta,
      Lastname: Prezime,
      Subject: NodeJS,
      Academy: Qinshift
    }
    `);
    res.end();
  }
  
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
