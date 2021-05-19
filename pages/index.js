import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HittingLeaders from '../components/hittingLeaders';
import DivisionCard from '../components/divisionCard';
import PitchingLeaders from '../components/pitchingLeaders';

import {
  alEast,
  alCentral,
  alWest,
  nlEast,
  nlCentral,
  nlWest,
} from '../teamdata';

export default function Home(props) {
  const { hittingStats, pitchingStats } = props;
  return (
    <>
      <div>
        <HittingLeaders stats={hittingStats} />
      </div>
      <div>
        <PitchingLeaders stats={pitchingStats} />
      </div>
      <div>
        <Link href='/stats'>
          <a>Aaron Judge</a>
        </Link>
      </div>

      <div>
        <DivisionCard teams={alEast} division={'AL East'} />
        <br />
        <DivisionCard teams={alCentral} division={'AL Central'} />
        <br />
        <DivisionCard teams={alWest} division={'AL West'} />
        <br />
      </div>

      <div>
        <DivisionCard teams={nlEast} division={'NL East'} />
        <br />
        <DivisionCard teams={nlCentral} division={'NL Central'} />
        <br />
        <DivisionCard teams={nlWest} division={'NL West'} />
      </div>
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
