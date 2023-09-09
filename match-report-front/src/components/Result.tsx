function Result(): JSX.Element {
  return (
    <div className="flex justify-center py-5">
      <div className="">
        <img
          width={35}
          height={35}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Escudo_del_Club_Nacional_de_Football.svg/600px-Escudo_del_Club_Nacional_de_Football.svg.png"
          alt="Club Shield Home"
        />
        <p className="uppercase">Club Name </p>
      </div>
      <div className="p-16"></div>
      <div>
        <img
          width={35}
          height={35}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_de_Rampla_Juniors.png"
          alt="Club Shield Away"
        />
        <p className="uppercase">Club Name </p>
      </div>
    </div>
  );
}

export default Result;
