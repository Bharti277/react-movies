import React from "react";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <div>
      {movie.map((currMovie, i) => {
        return <p key={i}>{currMovie.Title}</p>;
      })}
    </div>
  );
};

export default Movies;
