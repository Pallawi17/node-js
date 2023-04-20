module.exports = (req, res) => {
  let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  let mvs = req.movies;
  let ids = []
  mvs.forEach(mv => {
    ids.push(mv.id);
  });
  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!ids.includes(id)) {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      title: "validation failed",
      message: "Id not valid"
    }));
  } else if (baseURL === "/api/movies/" && ids.includes(id)) {
    res.setHeader("Content-Type", "application/json");
    let filterMovies = req.movies.filter(movie => {
      return movie.id === id;
    });
    if (filterMovies.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filterMovies));
      res.end();
    }else{
       res.statusCode = 400;
       res.write(JSON.stringify({
         title: "Movie Not Found",
         message: "Movie not found"
       }));
       res.end();
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      title: "Not Found",
      message: "Rout not found"
    }));
  }
}
