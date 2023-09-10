import training from "../assets/icons/training-icon.png";

function Score(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" bg-stone-900 border-l-2 border-green-400 w-full">
        <div className="flex justify-around py-2 px-3 gap-4">
          <p className="">2</p>
          <div className="border-r border-r-stone-600 "></div>
          <p className="">1</p>
        </div>
      </div>
      <div>
        <p className="text-green-400 my-3 text-light text-xs">+ 3 points</p>
      </div>

      <div className="flex flex-row justify-center gap-1">
        <img src={training} className="training-icon" />
        <p className="text-sm">4</p>
      </div>
    </div>
  );
}

export default Score;
