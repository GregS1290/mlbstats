import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function Roster({ roster }) {
  return (
    <>
      <Paper elevation={3}>
        <Typography variant='h2'>{roster[0].team_name}:</Typography>
        {roster.map((player) => (
          <div key={player.player_id}>
            <Link href={`${player.team_id}/${player.player_id}`}>
              <a>{player.name_display_first_last}</a>
            </Link>
          </div>
        ))}
      </Paper>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2021'`
  );
  const data = await res.json();

  const paths = data.team_all_season.queryResults.row.map((team) => ({
    params: {
      teamid: team.mlb_org_id,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { teamid } = params;

  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='${teamid}'`
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
