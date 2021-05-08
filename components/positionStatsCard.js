function PositionCard({ playerStats }) {
  // const { avg, slg, team_full, ops, h, hr, rbi, bb } = playerStats;
  return (
    <>
      {/* <div>{avg}</div>
      <div>{slg}</div>
      <div>{ops}</div>
      <div>{h}</div>
      <div>{bb}</div>
      <div>{rbi}</div> */}
      <h1>Hitter!</h1>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);

  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2017'&player_id='${id}'`
  );

  const data = await res.json();
  const playerStats = data.sport_hitting_tm.queryResults.row;

  return {
    props: {
      playerStats,
    },
  };
}

export default PositionCard;
