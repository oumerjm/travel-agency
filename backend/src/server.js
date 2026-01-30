const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Booking = require("./models/Booking");
const Destination = require("./models/Destination");

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// CORS
const corsMiddleware = cors();

const server = http.createServer((req, res) => {

  corsMiddleware(req, res, async () => {

    // =========================
    // GET DESTINATIONS
    // =========================

    if (req.url === "/api/destinations" && req.method === "GET") {

      const destinations = await Destination.find();

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(destinations));
    }

    // =========================
    // POST BOOKINGS
    // =========================

    else if (req.url === "/api/bookings" && req.method === "POST") {

      let body = "";

      req.on("data", chunk => {
        body += chunk.toString();
      });

      req.on("end", async () => {

        const data = JSON.parse(body);

        const booking = new Booking(data);
        await booking.save();

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Booking saved successfully" }));

      });
    }

    // =========================
    // DEFAULT
    // =========================

    else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("API Running");
    }

  });

});

server.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
