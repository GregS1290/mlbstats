import PitcherCard from '../../components/pitcherStatsCard';
import PositionCard from '../../components/pitcherStatsCard';
//import PlayerInfoCard from '../../components/playerInfoCard';

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

export async function getServerSideProps(context) {
  const { id, teamid } = context.params;
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
