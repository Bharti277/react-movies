import React from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <section className="movie__Page">
      <div className="grid grid-4-cols">
        {movie.map((currMovie, i) => {
          const { imdbID, Title, Poster } = currMovie;
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card__info">
                  <h2>{Title.slice(0, 15)}</h2>
                  <img src={Poster} alt="" />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
