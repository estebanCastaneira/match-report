import fooball from "../assets/icons/football.svg";
function Player({ player }): JSX.Element {
  const positions = {
    Goalkeeper: "GK",
    LeftBack: "LB",
    CenterBack: "CB",
    RightBack: "RB",
    LeftMidfielder: "LM",
    CentralDefensiveMidfielder: "CDM",
    CenterMidfielder: "CM",
    CentralAttackingMidfielder: "CAM",
    RightMidfielder: "RM",
    LeftForward: "LF",
    Striker: "ST",
    CenterForward: "CF",
    RightForward: "RF",
  };

  const playerPosition = player.position
    .split("")
    .filter((char) => char !== " ")
    .join("");
  return (
    <tr className="font-bold broder border-b-neutral-800">
      <td className="px-6 py-3 border-r border-b border-neutral-800">
        <p className="inline mr-2">{player.dorsal}</p>
        <p className="inline font-light uppercase">
          {positions[playerPosition]}
        </p>
      </td>
      <td className="px-6 py-3 border-r border-b border-neutral-800">
        <p className="inline uppercase">
          {player.player.name}.{player.player.lastName}
        </p>
        {/* 
          <img width={20} height={10} src={fooball} alt="football" /> */}
      </td>
      <td className="px-6 py-3 border-r border-b border-neutral-800">
        <p className="inline">{player.player.condition}</p>
      </td>
      <td className="px-6 py-3 border-r border-b border-neutral-800">
        <p className="inline">8.4</p>
      </td>
    </tr>
  );
}

export default Player;
