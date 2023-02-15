import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Movie from "../components/Movie";
import "../styles/Home.css";

const Home = () => {
  const { setSearch, movies } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-container">
      <Input handleSearch={handleSearch} />
      {movies?.length > 0 &&
        <div className="movies">
          {movies?.map((movie) => {
            return (
              <Link // add routes for all the movie posters
                to={`movies/${movie.imdbID}`} 
                className="text-link" key={movie.imdbID} >
                <Movie key={movie.imdbID} image={movie.Poster} title={movie.Title} />
              </Link>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Home;
