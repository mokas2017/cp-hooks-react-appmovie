# 🎥 CinéReact – Application de présentation de films et séries  
**CinéReact** est une application React simple et interactive qui permet aux utilisateurs de présenter leurs **films ou émissions de télévision préférés**, d’ajouter de nouveaux titres, et de les filtrer selon le **titre** ou la **note**. Le projet utilise les **Hooks React** pour gérer l’état et les effets.

---

## 🚀 Fonctionnalités

- 📄 Affichage des films sous forme de cartes (`MovieCard`)
- 📋 Liste dynamique des films (`MovieList`)
- 🔍 Filtrage par **titre** ou **note** (`Filter`)
- ➕ Ajout de nouveaux films via un formulaire
- ⚛️ Utilisation des Hooks React (`useState`, `useEffect`, etc.)

---

## 🧱 Composants à créer

| Composant   | Description |
|-------------|-------------|
| `MovieCard` | Affiche les détails d’un film (titre, description, poster, note) |
| `MovieList` | Affiche la liste complète des films |
| `Filter`    | Permet de filtrer les films par titre ou note |

---

## 🎬 Structure d’un film

```js
{
  title: "Nom du film",
  description: "Brève description",
  posterURL: "URL de l'affiche",
  rating: 4.5
}
Interactions utilisateur
- Ajouter un nouveau film via un formulaire
- Filtrer les films par titre ou note
- Visualiser les films sous forme de cartes

🛠️ Technologies utilisées
- React
- JSX
- CSS Modules ou Styled Components
- React Hooks (useState, useEffect)
- VS Code

📦 Installation
# Cloner le projet
git clone https://github.com/mokas2017/cp-hooks-react-appmovie.git

# Accéder au dossier
cd cp-hooks-react-appmovie

# Installer les dépendances
npm install

# Lancer l'application
npm start



📁 Organisation des fichiers
src/
├── components/
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── Filter.jsx
├── App.jsx
├── index.js



🧩 Exemple de composants
MovieCard.jsx
const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <span>⭐ {movie.rating}</span>
  </div>
);
export default MovieCard;



MovieList.jsx
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
);
export default MovieList;



Filter.jsx
const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Rechercher par titre"
      value={titleFilter}
      onChange={(e) => onTitleChange(e.target.value)}
    />
    <input
      type="number"
      placeholder="Note minimale"
      value={ratingFilter}
      onChange={(e) => onRatingChange(e.target.value)}
    />
  </div>
);
export default Filter;



🎯 Objectif
Créer une application intuitive et agréable pour partager ses coups de cœur cinématographiques tout en pratiquant les bases de React et des Hooks.

🌐 Déploiement sur GitHub
git remote add origin https://github.com/mokas2017/cp-hooks-react-appmovie.git
git push -u origin main



🇬🇧 English Version – CineReact: Movie & TV Showcase App
CineReact is a simple and interactive React app that lets users showcase their favorite movies or TV shows, add new titles, and filter them by title or rating. It uses React Hooks to manage state and effects.
Features
- Display movies as cards (MovieCard)
- Dynamic movie list (MovieList)
- Filter by title or rating (Filter)
- Add new movies via a form
- Built with React Hooks (useState, useEffect)
Movie Structure
{
  title: "Movie title",
  description: "Short description",
  posterURL: "Poster image URL",
  rating: 4.5
}


User Interactions
- Add a new movie
- Filter movies by title or rating
- View movies as cards
Installation
git clone https://github.com/mokas2017/cp-hooks-react-appmovie.git
cd cp-hooks-react-appmovie
npm install
npm start




