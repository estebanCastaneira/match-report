import Stats from "./pages/Stats";
import Lineup from "./pages/Lineup";
import Zones from "./pages/Zones";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import "./assets/styles/fonts.css";

function App(): JSX.Element {
  return (
    <>
      <main className="my-10  mx-auto max-w-4xl">
        <h1 className="m-5 font-light">Match Report</h1>
        <Navbar />
        <div className="mx-2">
          <Routes>
            <Route path="/" element={<Stats />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/zones" element={<Zones />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
