import Attack from "../components/Attack";
import { useState, useEffect } from "react";
import createStats from "../functions/createStats";
import axios from "axios";

function Zones(): JSX.Element {
  const [stats, setStats] = useState();
  const [score, setScore] = useState();
  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const [getStats, getMatch] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACK_URL}/stats`),
          axios.get(`${import.meta.env.VITE_BACK_URL}/match`),
        ]);
        const allStats = {
          leftTeam: getStats.data.leftTeam,
          rightTeam: getStats.data.rightTeam,
        };
        setStats(createStats(allStats));
        setScore(getMatch.data.score);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    stats && (
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-neutral-500">Attack Zones</h1>
        <Attack stats={stats} />
      </div>
    )
  );
}

export default Zones;
