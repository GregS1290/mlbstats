function HittingLeaders({ stats }) {
  return (
    <>
      <div>Hitting Leaders:</div>

      {stats.map((player) => (
        <div key={player.player_id}>
          <div>{player.name_display_first_last}</div>
          <span>{player.team_name}</span>
          <div>Avg: {player.avg}</div>
          <div>OPS: {player.ops}</div>
          <div>Homeruns: {player.hr}</div>
        </div>
      ))}
    </>
  );
}

export default HittingLeaders;
