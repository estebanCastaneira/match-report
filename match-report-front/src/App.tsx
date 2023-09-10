import Navbar from "./components/Navbar";
import Stats from "./pages/Stats";
import Lineup from "./pages/Lineup";
import { Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import "./assets/styles/fonts.css";

function App(): JSX.Element {
  return (
    <>
      <main className="my-10">
        <h1 className="mx-2 font-light my-5">Match Report</h1>
        <Navbar />
        <div className="mx-2">
          <Routes>
            <Route path="/" element={<Stats />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/zones" />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
