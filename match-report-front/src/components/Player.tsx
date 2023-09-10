import fooball from "../assets/icons/football.svg";
function Player(): JSX.Element {
  return (
    <tbody>
      <tr className="font-bold">
        <td scope="row" className="px-6 py-3 border-r border-neutral-800">
          <p className="inline">1</p> <p className="inline uppercase">gk</p>
        </td>
        <td className="px-6 py-3 border-r border-neutral-800 flex justify-between">
          <p className="inline uppercase">P.Surname</p>
          <img width={20} height={10} src={fooball} alt="football" />
        </td>
        <td className="px-6 py-3 border-r border-neutral-800">
          <p className="inline">96</p>
        </td>
        <td className="px-6 py-3">
          <p className="inline">8.4</p>
        </td>
      </tr>
    </tbody>
  );
}

export default Player;
