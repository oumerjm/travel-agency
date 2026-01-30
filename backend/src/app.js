const http = require("http");
const cors = require("cors");

const corsMiddleware = cors();

const destinations = [
  {
    id: 1,
    name: "Paris",
    description: "Explore the city of love and Romance",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },
  {
    id: 2,
    name: "New York",
    description: "Ever wondered what the chaos of New York look like?",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    id: 3,
    name: "Bali",
    description: "Get refreshed in the beaches of Bali!",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: 4,
    name: "Dubai",
    description: "Thinking of starting a business? Visit Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  }
];

const server = http.createServer((req, res) => {

  corsMiddleware(req, res, () => {

    if (req.url === "/api/destinations" && req.method === "GET") {

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(destinations));

    } else {

      res.writeHead(404);
      res.end("Not Found");

    }

  });

});

server.listen(4000, () => {
  console.log("Mock API running on http://localhost:4000");
});
