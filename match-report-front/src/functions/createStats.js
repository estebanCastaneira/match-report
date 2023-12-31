function createStats(stats) {
  const statsArr = [];
  const allStats = stats.leftTeam;
  const rightTeamStats = stats.rightTeam;
  delete allStats.goals;
  delete rightTeamStats.goals;
  for (const stat in allStats) {
    const obj = {};
    const statName = stat
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    obj.statName = statName;
    obj.leftTeam = allStats[stat];
    obj.rightTeam = rightTeamStats[stat];
    statsArr.push(obj);
  }
  const attackZones = statsArr.pop();
  return { statsArr, attackZones };
}

export default createStats;
