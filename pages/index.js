import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HittingLeaders from '../components/hittingLeaders';
import DivisionCard from '../components/divisionCard';
import PitchingLeaders from '../components/pitchingLeaders';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import {
  alEast,
  alCentral,
  alWest,
  nlEast,
  nlCentral,
  nlWest,
} from '../teamdata';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home(props) {
  const { hittingStats, pitchingStats } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <HittingLeaders stats={hittingStats} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PitchingLeaders stats={pitchingStats} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DivisionCard teams={alEast} division={'AL East'} />
          <br />
          <DivisionCard teams={alCentral} division={'AL Central'} />
          <br />
          <DivisionCard teams={alWest} division={'AL West'} />
          <br />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DivisionCard teams={nlEast} division={'NL East'} />
          <br />
          <DivisionCard teams={nlCentral} division={'NL Central'} />
          <br />
          <DivisionCard teams={nlWest} division={'NL West'} />
        </Grid>
      </Grid>
    </div>
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
