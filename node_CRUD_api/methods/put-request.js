const requestBodyParser = require('../util/body-parser')
const writeToFile = require('../util/write-to-file');

module.exports = async (req, res) => {
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
    try {
      let body = await requestBodyParser(req);
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
        req.movies[index] = {
          id,
          ...body
        };
        writeToFile(req.movies);
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end(JSON.stringify(req.movies[index]));
      }
    } catch (error) {
      console.log(error);
      res.writeHead(404, {
        "Content-Type": "application/json"
      });
      res.end(JSON.stringify({
        title: "validation failed",
        message: "Id not valid"
      }));
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      title: "validation failed",
      message: "Id not valid"
    }));
  }
}