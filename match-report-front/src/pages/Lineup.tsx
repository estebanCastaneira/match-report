import LineupHeader from "../components/LineupHeader";
import LineupList from "../components/LineupList";

function Lineup(): JSX.Element {
  return (
    <>
      <div className="mx-2 my-3">
        <LineupHeader />
        <LineupList />;
      </div>
      {/* <div className="mx-2">
        <LineupHeader />
        <LineupList />;
      </div> */}
    </>
  );
}

export default Lineup;
