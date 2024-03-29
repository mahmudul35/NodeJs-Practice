require("dotenv").config();
const http = require("http");
const PORT = process.env.PORT || 3001;
const HName = process.env.HOST_NAME;
const myServer = http.createServer((req, res) => {
  res.end("Hello,i'm your first server");
});
myServer.listen(PORT, HName, () => {
  console.log(`Server running at http://${HName}:${PORT}`);
});
