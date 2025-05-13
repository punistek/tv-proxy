const express = require("express");
const request = require("request");
const app = express();

app.get("/proxy", (req, res) => {
  const url = req.query.url;
  const referer = "https://grtv27.live/";  // Yayının referer adresi
  if (!url) return res.status(400).send("URL gerekli");

  const options = {
    url: url,
    headers: {
      'Referer': referer,
    },
  };

  req.pipe(request(options)).pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy sunucusu çalışıyor");
});
