import Navbar from "./components/Navbar";
import Stats from "./assets/Pages/Stats";
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
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
