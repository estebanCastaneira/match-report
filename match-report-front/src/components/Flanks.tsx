import arrow from "../assets/images/arrow.svg";

function Flanks(): JSX.Element {
  return (
    <>
      <div
        className="bar flex items-end justify-center"
        style={{ height: "60%" }}
      >
        <img src={arrow} alt="arrow" className="absolute -top-[22px]" />
        <p className="text-black">80%</p>
      </div>
    </>
  );
}

export default Flanks;
