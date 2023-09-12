import arrow from "../assets/images/arrow.svg";

function Flanks({ percentage }): JSX.Element {
  return (
    <>
      <div
        className="bar flex items-end justify-center"
        style={{ height: `${percentage * 100}%` }}
      >
        <img src={arrow} alt="arrow" className="absolute -top-[22px] w-full" />
        <p className="text-black">{Math.round(percentage * 100)}%</p>
      </div>
    </>
  );
}

export default Flanks;
