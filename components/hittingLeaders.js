function HittingLeaders({ stats }) {
  return (
    <>
      <div>Hitting Leaders:</div>

      {stats.map((player) => (
        <div key={player.player_id}>
          <div>{player.name_display_first_last}</div>
          <div>{player.avg}</div>
          <div>{player.ops}</div>
        </div>
      ))}
    </>
  );
}

export default HittingLeaders;
