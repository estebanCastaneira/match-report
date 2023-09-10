import Score from "./Score";
import LeftTeam from "./LeftTeam";
import RightTeam from "./RightTeam";
import Stat from "./Stat";
import Attack from "./Attack";
import axios from "axios";
import { useEffect, useState } from "react";

function Results(): JSX.Element {
  const [stats, setStats] = useState();

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const getStats = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACK_URL}/stats`),
        ]);
        setStats(getStats[0].data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(stats);
  return (
    <div className="mx-4 md:mx-0">
      <div className="flex justify-around border-b py-4  border-b-neutral-900 md:justify-center md:gap-7 md:mx-auto">
        <LeftTeam />
        <Score />
        <RightTeam />
      </div>
      <div className="mt-5 mx-5 md:mx-0 md:flex md:justify-between md:px-6 md:gap-20">
        <Stat />
        <div className="hidden md:block w-full">
          <Attack />
        </div>
      </div>
    </div>
  );
}

export default Results;
