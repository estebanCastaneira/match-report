import Stats from "./pages/Stats";
import Lineup from "./pages/Lineup";
import Navbar from "./components/Navbar";
import Attack from "./components/Attack";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import createStats from "./functions/createStats.js";
import "tailwindcss/tailwind.css";
import "./App.css";
import "./assets/styles/fonts.css";

function App(): JSX.Element {
  const [stats, setStats] = useState();
  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const [getStats] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACK_URL}/stats`),
        ]);
        const allStats = {
          leftTeam: getStats.data.leftTeam,
          rightTeam: getStats.data.rightTeam,
        };
        setStats(createStats(allStats));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    stats && (
      <>
        <main className="my-10  mx-auto max-w-4xl">
          <h1 className="m-5 font-light">Match Report</h1>
          <Navbar />
          <div className="mx-2">
            <Routes>
              <Route path="/" element={<Stats />} />
              <Route path="/lineup" element={<Lineup />} />
              <Route path="/zones" element={<Attack stats={stats} />} />
            </Routes>
          </div>
        </main>
      </>
    )
  );
}

export default App;
