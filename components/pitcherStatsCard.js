function PitcherCard({ playerStats }) {
  // const { whip, so, avg, k9, ip, h, era, bb } = playerStats;
  return (
    <>
      {/* <div>{era}</div>
      <div>{h}</div>
      <div>{bb}</div>
      <div>{so}</div>
      <div>{k9}</div>
      <div>{whip}</div> */}
      <h1>Pitcher!</h1>
    </>
  );
}

export async function getStaticProps({ props }) {
  const { id } = props;
  console.log(id);

  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2017'&player_id='${id}'`
  );

  const data = await res.json();
  const playerStats = data.sport_pitching_tm.queryResults.row;

  return {
    props: {
      playerStats,
    },
  };
}

export default PitcherCard;
