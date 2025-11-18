// App.js — point d’entrée principal de l’application React (Movie App)
import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import moviesData from "./movieDATA";
import AddMovie from "./components/addmovie/AddMovie";
import FilterByTitle from "./components/FilterByTitle";
import FilterByRate from "./components/Rating";

const App = () => {
  // État local : liste des films affichés
  const [movies, setMovies] = useState(moviesData);
  // État local : filtre sur le titre
  const [searchTitle, setSearchTitle] = useState("");
  // État local : filtre sur la note minimale
  const [searchRate, setSearchRate] = useState(1);

  // Ajoute un nouveau film à la liste
  const movieAdd = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  return (
    <div className="App">
      <h1>MovieList</h1>
      <FilterByTitle
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
      />
      <FilterByRate
        searchRate={searchRate}
        setSearchRate={setSearchRate}
        isRating={false}
      />
      <AddMovie movieAdd={movieAdd} />
      <MovieList
        movies={movies}
        searchTitle={searchTitle}
        searchRate={searchRate}
      />
    </div>
  );
};

export default App;