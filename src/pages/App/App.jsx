import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import MovieListPage from "./MovieListPage";
import MovieDetailPage from "./MovieDetailPage";
import ActorListPage from "./ActorListPage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main>
      <h1>App</h1>
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/movies" element={<MovieListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : null}
    </main>
  );
}

export default App;
