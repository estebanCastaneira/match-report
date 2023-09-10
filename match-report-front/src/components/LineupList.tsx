import Player from "./Player";
import condition from "../assets/icons/condition.png";

function LineupList({ teamInfo, team }): JSX.Element {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left border border-neutral-900 text-white">
        <thead className="bg-neutral-900">
          <tr className="border border-neutral-800">
            <th scope="col" className="px-6 py-3 border-r border-neutral-800">
              <p className="font-light">Lineup</p>
            </th>
            <th scope="col" className="px-6 py-3 border-r border-neutral-800">
              <p className="font-light">Player</p>
            </th>
            <th
              scope="col"
              className="px-6 py-3 border-r border-neutral-800 flex items-center justify-center"
            >
              <img src={condition} alt="Player condition icon" />
            </th>
            <th scope="col" className="px-6 py-3">
              <p className="font-light">Rating</p>
            </th>
          </tr>
        </thead>
        {team === "left"
          ? teamInfo.leftLineup.map((player) => (
              <Player key={player.id} player={player} />
            ))
          : teamInfo.rightLineup.map((player) => (
              <Player key={player.id} player={player} />
            ))}
      </table>
    </div>
  );
}

export default LineupList;
