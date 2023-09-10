import Player from "./Player";

function LineupList(): JSX.Element {
  return (
    <div>
      <div className="bg-neutral-900 border border-neutral-800 p-2 table w-full">
        <div className="table-header-group">
          <div className="table-cell">
            <p>Lineup</p>
          </div>
          <div className="table-cell">
            <p>Player</p>
          </div>
          <div className="table-cell">
            <p>Ray</p>
          </div>
          <div className="table-cell">
            <p>Rating</p>
          </div>
        </div>
      </div>
      <Player />
    </div>
  );
}

export default LineupList;
