const { log } = require("console");
const framework = require("./framework/app");
const app = new framework();

app.use((req, res, next) => {
  //   log(req.url);
  next();
});

app.get("/hi", (req, res) => {
  log(req.url);
});

app.get("/hello", (req, res) => {
  log(req.url);
});

app.get("/mern", (req, res) => {
  log(req.url);
});

app.post("/dekico", (req, res) => {
  log(req.url);
  req.on("data", (chunk) => {
    log(chunk.toString());
  });
});
app.lishen(3000, () => {
  log("server Running on port 3000");
});
