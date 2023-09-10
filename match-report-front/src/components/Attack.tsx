import field from "../assets/images/field.svg";
import Flanks from "./Flanks";

function Attack(): JSX.Element {
  return (
    <div className="relative w-fit">
      <div className="h-full">
        <img src={field} alt="Field" className="relative z-30 " />
        <div className="chart absolute bottom-0 z-40">
          <Flanks />
          <Flanks />
          <Flanks />
        </div>
      </div>
    </div>
  );
}

export default Attack;
