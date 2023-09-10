function createStats(stats) {
  const statsObj = [];
  const allStats = stats.leftTeam;
  const rightTeamStast = stats.rightTeam;
  delete allStats.goals;
  delete rightTeamStast.goals;
  for (const stat in allStats) {
    const obj = {};
    const statName = stat
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    obj.statName = statName;
    obj.leftTeam = allStats[stat];
    obj.rightTeam = rightTeamStast[stat];
    statsObj.push(obj);
  }
  return statsObj;
}

export default createStats;
