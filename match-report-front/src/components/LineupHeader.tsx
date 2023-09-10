function LineupHeader({ teamInfo, team }): JSX.Element {
  return (
    teamInfo && (
      <div className="bg-neutral-900 p-2 ">
        <div className="mx-2 flex justify-between">
          <div className="flex items-center">
            <img
              width={30}
              height={30}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Escudo_del_Club_Nacional_de_Football.svg/600px-Escudo_del_Club_Nacional_de_Football.svg.png"
              alt="Left Team 1 Avatar"
            />
            <p className="ml-2 font-medium text-lg">
              {team === "left"
                ? teamInfo.leftTeamInfo.name
                : teamInfo.rightTeamInfo.name}
              {}
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-light mr-3">
              {team === "left"
                ? teamInfo.leftTacticName
                : teamInfo.rightTacticName}
            </p>
            <div className="">
              <p className="text-2xs p-05 border-1 border-red-500 rounded-full">
                49
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default LineupHeader;
