import React from "react";
import Movie from "../objects/Movie";

const FetchMovie = () => {
  return fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => data.map(movie => new Movie(movie)));
};

export { FetchMovie };
