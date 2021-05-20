function PositionCard({ playerStats }) {
  const { name_display_first_last, team_name, avg, ops, hr, bb, h, so } =
    playerStats;
  return (
    <>
      <h4>{name_display_first_last}</h4>
      <span>{team_name}</span>
      <div>Avg: {avg}</div>
      <div>OPS: {ops}</div>
      <div>Hits: {h}</div>
      <div>Homeruns: {hr}</div>
    </>
  );
}

export default PositionCard;
