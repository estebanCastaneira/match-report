import Results from "../components/Results";
import { MatchStats } from "../../typesStats";

type Props = {
  stats: MatchStats;
};
function Stats({ stats }: Props): React.FC {
  return <Results stats={stats} />;
}

export default Stats;
