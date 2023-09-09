import Score from "./Score";
import TeamHome from "./TeamHome";
import TeamAway from "./TeamAway";
import Stat from "./Stat";
function Results(): JSX.Element {
  return (
    <>
      <div className="flex justify-around border-b py-4 mx-4 border-b-neutral-900">
        <TeamHome />
        <Score />
        <TeamAway />
      </div>
      <div>
        <Stat />
      </div>
    </>
  );
}

export default Results;
