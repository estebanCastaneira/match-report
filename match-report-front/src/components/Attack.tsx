function Attack(): JSX.Element {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <p>10</p>
        <h4 className="uppercase text-stone-500 text-sm">Stat Name</h4>
        <p>4</p>
      </div>
      <div className="w-full bg-rose-700 h-1">
        <div
          className="bg-blue-600 border-r-2 border-r-black h-1"
          style={{ width: "68%" }}
        ></div>
      </div>
    </div>
  );
}

export default Attack;
