import HittingLeaders from '../components/hittingLeaders';
import PitchingLeaders from '../components/pitchingLeaders';

export default function leaders(props) {
  console.log(props.pitchingStats);
  return (
    <>
      <HittingLeaders stats={props.hittingStats} />
      <br></br>
      <PitchingLeaders stats={props.pitchingStats} />
    </>
  );
}

export async function getStaticProps() {
  const hRes = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2021'&sort_column='avg'&leader_hitting_repeater`
  );

  const pRes = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2021'&sort_column='era'&leader_pitching_repeater`
  );

  const hitterData = await hRes.json();
  const pitcherData = await pRes.json();

  const hittingStats =
    hitterData.leader_hitting_repeater.leader_hitting_mux.queryResults.row;

  const pitchingStats =
    pitcherData.leader_pitching_repeater.leader_pitching_mux.queryResults.row;

  return {
    props: {
      pitchingStats,
      hittingStats,
    },
  };
}
