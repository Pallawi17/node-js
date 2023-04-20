const writeToFile = require("../util/write-to-file");

module.exports = (req, res) => {
  let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  let mvs = req.movies;
  let ids = []
  mvs.forEach(mv => {
    ids.push(mv.id);
  });
  if (!ids.includes(id)) {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      title: "validation failed",
      message: "Id not valid"
    }));
  } else if (baseURL === "/api/movies/" && ids.includes(id)) {
    res.setHeader("Content-Type", "application/json");
    let index = req.movies.findIndex(movie => {
      return movie.id === id;
    });
    if (index === -1) {
      res.statusCode = 400;
      res.write(JSON.stringify({
        title: "Movie Not Found",
        message: "Movie not found"
      }));
      res.end();
    } else {
      req.movies.splice(index, 1);
      writeToFile(req.movies);
      res.writeHead(204, {"Content-Type": "application/json"});
      res.end(JSON.stringify(req.movies));
    }
  }
}