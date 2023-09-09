import Score from "./Score";
import TeamHome from "./TeamHome";
import TeamAway from "./TeamAway";
import Stat from "./Stat";
function Results(): JSX.Element {
  return (
    <div className="mx-4">
      <div className="flex justify-around border-b py-4  border-b-neutral-900">
        <TeamHome />
        <Score />
        <TeamAway />
      </div>
      <div className="mt-5 mx-5">
        <Stat />
      </div>
    </div>
  );
}

export default Results;
