const http = require("http");

const server = http.createServer((req, res) => {
  let requestUrl = req.url;

  if (requestUrl === "/") {
    res.write("HOME");
    res.end();
  }

  if (requestUrl === "/about") {
    res.write("ABOUT");
    res.end();
  }
});

server.listen(5000);
