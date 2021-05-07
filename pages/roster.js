import Link from 'next/link';

function Roster({ roster }) {
  return (
    <>
      <h1>Yankees Active Roster:</h1>
      {roster
        // .filter((player) => {
        //   if (player.status_code === 'A') {
        //     return player;
        //   }
        // })
        .map((player) => (
          <div key={player.player_id}>
            <Link href={`roster/${player.player_id}`}>
              <a>{player.name_display_first_last}</a>
            </Link>
          </div>
        ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='147'`
  );
  const data = await res.json();
  const roster = data.roster_40.queryResults.row.filter((player) => {
    if (player.status_code === 'A') {
      return player;
    }
  });
  return {
    props: {
      roster,
    },
  };
}

export default Roster;
