import Navbar from "./components/Navbar";
import Stats from "./pages/Stats";
import Lineup from "./pages/Lineup";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import "./App.css";
import "./assets/styles/fonts.css";

function App(): JSX.Element {
  const [stats, setStats] = useState();
  const [match, setMatch] = useState();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const [getStats, getMatch] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACK_URL}/stats`),
          axios.get(`${import.meta.env.VITE_BACK_URL}/match`),
        ]);
        setStats(getStats.data);
        setMatch(getMatch.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <main className="my-10">
        <h1 className="mx-2 font-light my-5">Match Report</h1>
        <Navbar />
        <div className="mx-2">
          <Routes>
            <Route path="/stats" element={<Stats stats={stats} />} />
            <Route path="/lineup" element={<Lineup match={match} />} />
            <Route path="/zones" />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
