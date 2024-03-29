const http = require("http");
const PORT = 3008;
const HostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write("<h1>Hello</h1>");
  res.write("<h1>Hello</h1>");
  res.end();
});
myServer.listen(PORT, HostName, () => {
  console.log(`server running at http://${HostName}:${PORT}`);
});
