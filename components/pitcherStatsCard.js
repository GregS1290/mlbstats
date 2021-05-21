function PitcherCard({ playerStats }) {
  const { name_display_first_last, team_name, whip, so, k9, ip, h, era, bb } =
    playerStats;
  return (
    <>
      <h4>{name_display_first_last}</h4>
      <div>{team_name}</div>
      <div>ERA: {era}</div>
      <div>Innings: {ip}</div>
      <div>Strikeouts: {so}</div>
      <div>WHIP: {whip}</div>
    </>
  );
}

export default PitcherCard;
