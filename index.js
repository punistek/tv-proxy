const express = require("express");
const request = require("request");
const app = express();

app.get("/proxy", (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("URL gerekli");

  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy sunucusu çalışıyor");
});
