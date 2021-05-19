function PitchingLeaders({ stats }) {
  return (
    <>
      <h2>Pitching Leaders:</h2>

      {stats.map((player) => (
        <div key={player.player_id}>
          <h4>{player.name_display_first_last}</h4>
          <span>{player.team_name}</span>
          <div>ERA: {player.era}</div>
          <div>Strikeouts: {player.so}</div>
          <div>WHIP: {player.whip}</div>
        </div>
      ))}
    </>
  );
}

export default PitchingLeaders;
