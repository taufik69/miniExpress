const { log } = require("console");
const http = require("http");

class app {
  constructor() {
    this.routes = [];
    this.middlewares = [];
  }

  use(middlewareFn) {
    this.middlewares.push(middlewareFn);
  }

  get(path, handelerFn) {
    this.routes.push({ method: "GET", path, handelerFn });
  }

  post(path, handelerFn) {
    this.routes.push({ method: "POST", path, handelerFn });
  }
  lishen(port, callback) {
    const server = http.createServer(async (req, res) => {
      //   middleware execution
      for (let mw of this.middlewares) {
        let finished = false;
        await new Promise((resovle) => {
          mw(req, res, () => {
            finished = true;
            resovle();
          });
        });
        if (!finished) {
          return;
        }
      }
      //    routes match

      const matchRoutes = this.routes.find(
        (r) => r.method == req.method && r.path == req.url
      );
      if (matchRoutes) {
        matchRoutes.handelerFn(req, res);
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Routes Not Found");
      }
    });

    server.listen(port, callback);
  }
}

module.exports = app;
