import Player from "./Player";
import condition from "../assets/icons/Condition 5.png";

function LineupList(): JSX.Element {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left border border-neutral-900 text-white">
        <thead className="bg-neutral-900 ">
          <tr className="border border-neutral-800">
            <th scope="col" className="px-6 py-3">
              Lineup
            </th>
            <th scope="col" className="px-6 py-3">
              Player
            </th>
            <th scope="col" className="px-6 py-3">
              <img src={condition} alt="Player condition icon" />
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
          </tr>
        </thead>
      </table>
      <Player />
    </div>
  );
}

export default LineupList;

{
  /* <div>
<div className="border border-neutral-800 table m-2 w-full">
  <div className="table-header-group bg-neutral-900 p-4 m-2">
    <div className="table-cell">
      <p>Lineup</p>
    </div>
    <div className="table-cell">
      <p>Player</p>
    </div>
    <div className="table-cell">
      <img src={condition} className="condition-icon" />
    </div>
    <div className="table-cell">
      <p>Rating</p>
    </div>
  </div>
  <Player />
</div>
</div> */
}
