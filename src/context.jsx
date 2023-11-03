import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://omdbapi.com/?apikey=a6f0d8b6`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("titanic");
  const [isError, setIsError] = useState({
    show: false,
    msg: "",
  });

  const getMovies = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 800);

    return () => clearTimeout(timer);
  }, [query]);
  console.log(movie, "movie");

  return (
    <AppContext.Provider value={{ isError, movie, isLoading, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
