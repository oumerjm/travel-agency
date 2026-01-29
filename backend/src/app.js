const http = require("http");
const cors = require("cors");

const corsMiddleware = cors();

// TEMP DATA (Later from DB)
const destinations = [
  {
    id: 1,
    name: "Paris",
    description: "Explore the city of love and Romance",
    image: "paris1.jpg"
  },
  {
    id: 2,
    name: "New York",
    description: "Ever wondered what the chaos of New York look like?",
    image: "newyork2.jpg"
  },
  {
    id: 3,
    name: "Bali",
    description: "Get refreshed in the beaches of Bali!",
    image: "bali1.jpg"
  },
  {
    id: 4,
    name: "Dubai",
    description: "Thinking of starting a business? Visit Dubai",
    image: "dubai1.jpg"
  }
];

const server = http.createServer((req, res) => {

  corsMiddleware(req, res, () => {

    if (req.url === "/api/destinations" && req.method === "GET") {

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify(destinations));
    }

  });

});

server.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
