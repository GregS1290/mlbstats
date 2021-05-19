function HittingLeaders({ stats }) {
  return (
    <>
      <h2>Hitting Leaders</h2>

      {stats.map((player) => (
        <div key={player.player_id}>
          <h4>{player.name_display_first_last}</h4>
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
