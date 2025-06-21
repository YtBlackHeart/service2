const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  console.log("🔔 Ping received from service 1");
  res.send("Pong from service 2!");
});

setInterval(() => {
  axios.get("https://SERVICE1-URL-HERE/ping")
    .then(() => console.log("✅ Pinged service 1"))
    .catch((err) => console.error("❌ Failed to ping service 1:", err.message));
}, 120000); // Every 2 minutes

app.listen(PORT, () => {
  console.log(`🚀 Service 2 running on port ${PORT}`);
});
