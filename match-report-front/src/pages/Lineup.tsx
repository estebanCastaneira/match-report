import { useEffect, useState } from "react";
import LineupHeader from "../components/LineupHeader";
import LineupList from "../components/LineupList";
import axios from "axios";
function Lineup(): JSX.Element {
  const [match, setMatch] = useState();
  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const getMatch = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACK_URL}/match`),
        ]);
        setMatch(getMatch[0].data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="md:flex justify-center">
      <div className="mx-2 my-3">
        <LineupHeader teamInfo={match} team={"left"} />
        <LineupList />;
      </div>
      <div className="mx-2 my-3">
        <LineupHeader teamInfo={match} team={"right"} />
        <LineupList />;
      </div>
    </div>
  );
}

export default Lineup;
