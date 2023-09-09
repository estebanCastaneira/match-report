function Score(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" bg-stone-900 border-l-2 border-green-400 w-full ">
        <div className="flex justify-around py-2">
          <div className="">
            <p className="">2</p>
          </div>
          <div className="border-r border-r-stone-600 "></div>
          <div>
            <p className="">1</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-green-400 my-3 text-light text-xs">+ 3 points</p>
      </div>

      <div className="flex flex-row justify-center">
        <img
          width={15}
          src="https://us.123rf.com/450wm/arrrief/arrrief2102/arrrief210200150/164753247-dise%C3%B1o-de-ilustraci%C3%B3n-de-cono-de-entrenamiento-icono-de-cono-de-entrenamiento-aislado-sobre-fondo.jpg"
          alt="training token"
        />
        <p className="text-sm">4</p>
      </div>
    </div>
  );
}

export default Score;
