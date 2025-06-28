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

// module.exports = (app) => {
//   app.get("/users", (req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify([{ id: 1, name: "Taufik" }]));
//   });

//   app.post("/users", (req, res) => {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User created", data: JSON.parse(body) }));
//     });
//   });
// };


