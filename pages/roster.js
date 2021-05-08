import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function Roster({ roster }) {
  return (
    <>
      <Paper elevation={3}>
        <Typography variant='h2'>Yankees Active Roster:</Typography>
        {roster.map((player) => (
          <div key={player.player_id}>
            <Link href={`roster/${player.player_id}`}>
              <a>{player.name_display_first_last}</a>
            </Link>
          </div>
        ))}
      </Paper>
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
