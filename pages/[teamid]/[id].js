import PitcherCard from '../../components/pitcherStatsCard';
import PositionCard from '../../components/pitcherStatsCard';
//import PlayerInfoCard from '../../components/playerInfoCard';
import { useRouter } from 'next/router';

function PlayerInfoCard({ playerInfo }) {
  const {
    name_display_first_last,
    primary_position_txt,
    player_id,
    throws,
    bats,
    team_name,
    name_nick,
    primary_stat_type,
  } = playerInfo;
  console.log(primary_stat_type);
  console.log(primary_position_txt);
  return (
    <>
      <h1>{name_display_first_last} </h1>
      <span>{name_nick ? `(${name_nick})` : ''}</span>
      <br />
      <div>Team: {team_name}</div>
      <div>Primary Position: {primary_position_txt}</div>
      <div>Throws: {throws}</div>
      <div>Bats: {bats}</div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='${teamid}'`
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
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${id}'`
  );
  const data = await res.json();
  const playerInfo = data.player_info.queryResults.row;

  return {
    props: {
      playerInfo,
    },
  };
}

//***UTILIZE PRIMARY STAT TYPE TO GENERATE SECOND QUERY ***
export default PlayerInfoCard;
