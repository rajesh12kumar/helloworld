// Import http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, Node.js Project!</h1>");
});

// Listen on port 3000
server.listen(3000, "0.0.0.0", () => {
  console.log("Server running at :");
});
