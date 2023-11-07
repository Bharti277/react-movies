import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = `https://omdbapi.com/?apikey=a6f0d8b6`;

const SingleMovie = () => {
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovies = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_URL}&i=${id}`);
  }, [id]);

  console.log(movie, "movieid");
  return (
    <div className="single__movie__card">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Poster} />
    </div>
  );
};

export default SingleMovie;
