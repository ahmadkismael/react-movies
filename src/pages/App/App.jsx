import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import MovieListPage from "../MovieListPage/MovieListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorListPage from "../ActorPage/ActorListPage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <h1>App</h1>
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
