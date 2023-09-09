import Navbar from "./components/Navbar";
import Stats from "./assets/Pages/Stats";
import { Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import "./assets/styles/fonts.css";
function App(): JSX.Element {
  return (
    <>
      <main className="m-2">
        <h1 className="font-light my-5">Match Report</h1>
        <Navbar />
        <Routes>
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
