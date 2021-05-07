function Stats({ stats }) {
  const { avg, slg, team_full, ops, h, hr, rbi, bb } = stats;
  return (
    <>
      <h1>Aaron Judge Stats</h1>
      <br />
      <ul>
        <li>Team:{team_full}</li>
        <li>Average:{avg}</li>
        <li>Slugging:{slg}</li>
        <li>OPS:{ops}</li>
        <li>Hits:{h}</li>
        <li>Walks:{bb}</li>
        <li>Homeruns:{hr}</li>
        <li>RBI's:{rbi}</li>
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%272021%27&player_id=%27592450%27`
  );
  const data = await res.json();
  const stats = data.sport_hitting_tm.queryResults.row;
  console.log(stats);
  return {
    props: {
      stats,
    },
  };
}

export default Stats;
