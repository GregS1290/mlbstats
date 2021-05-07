function Player({ stats }) {
  const { avg, slg, team_full, ops, h, hr, rbi, bb } = stats;
  return (
    <>
      <h1>Player</h1>
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

export async function getStaticPaths() {
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='147'`
  );
  const data = await res.json();
  const roster = data.roster_40.queryResults.row.filter((player) => {
    if (player.status_code === 'A') {
      return player;
    }
  });
  const paths = roster.map((player) => ({
    params: {
      id: player.player_id,
    },
  }));

  //pre-render only these paths at build time
  // fallback: false means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  // if (position === 'P') {
  //   const res = await fetch(
  //     `http://lookup-service-prod.mlb.com/json/named.sport_career_pitching_lg.bam?league_list_id='mlb'&game_type='R'&player_id='${params.id}'`
  //   );
  //   const data = await res.json();
  //   const stats = data.sport_career_pitching_lg.queryResults.row;
  //   return {
  //     props: {
  //       name: name,
  //       stats,
  //     },
  //   };
  // } else {
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%272021%27&player_id=%27${params.id}%27`
  );
  const data = await res.json();
  const stats = data.sport_hitting_tm.queryResults.row;
  return {
    props: {
      //name: name,
      stats,
    },
    // };
  };
}

export default Player;
