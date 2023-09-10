import Score from "./Score";
import TeamHome from "./TeamHome";
import TeamAway from "./TeamAway";
import Stat from "./Stat";
import Attack from "./Attack";

function Results(): JSX.Element {
  return (
    <div className="mx-4 md:mx-0">
      <div className="flex justify-around border-b py-4  border-b-neutral-900 md:justify-center md:gap-7 md:mx-auto">
        <TeamHome />
        <Score />
        <TeamAway />
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
