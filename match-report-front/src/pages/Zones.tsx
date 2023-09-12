import Attack from "../components/Attack";
import LeftTeam from "../components/LeftTeam";
import RightTeam from "../components/RightTeam";
import Score from "../components/Score";
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
    stats &&
    score && (
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-around border-b py-4  border-b-neutral-900 md:justify-center md:gap-7 md:mx-auto">
          <LeftTeam />
          <Score score={score} />
          <RightTeam />
        </div>
        <h1 className="text-xs text-neutral-500 uppercase my-5">
          Attack Zones
        </h1>
        <Attack stats={stats} />
      </div>
    )
  );
}

export default Zones;
