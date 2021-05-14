import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HittingLeaders from '../components/hittingLeaders';

export default function Home({ stats }) {
  return (
    <>
      <div>
        <Link href='/stats'>
          <a>Aaron Judge</a>
        </Link>
      </div>

      <h2>AL East</h2>
      <div>
        <Link href='/147'>
          <a>View Yankees Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/111'>
          <a>View Red Sox Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/141'>
          <a>View Blue Jays Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/139'>
          <a>View Rays Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/110'>
          <a>View Orioles Roster</a>
        </Link>
      </div>

      <h2>AL Central</h2>
      <div>
        <Link href='/145'>
          <a>View White Sox Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/142'>
          <a>View Twins Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/114'>
          <a>View Indians Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/118'>
          <a>View Royals Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/116'>
          <a>View Tigers Roster</a>
        </Link>
      </div>

      <h2>AL West</h2>
      <div>
        <Link href='/117'>
          <a>View Astros Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/133'>
          <a>View Athletics Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/108'>
          <a>View Angels Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/136'>
          <a>View Mariners Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/140'>
          <a>View Rangers Roster</a>
        </Link>
      </div>

      <h2>NL East</h2>
      <div>
        <Link href='/121'>
          <a>View Mets Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/143'>
          <a>View Phillies Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/144'>
          <a>View Braves Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/120'>
          <a>View Nationals Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/146'>
          <a>View Marlins Roster</a>
        </Link>
      </div>

      <h2>NL Central</h2>
      <div>
        <Link href='/112'>
          <a>View Cubs Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/113'>
          <a>View Reds Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/138'>
          <a>View Cardinals Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/121'>
          <a>View Brewers Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/134'>
          <a>View Pirates Roster</a>
        </Link>
      </div>

      <h2>NL West</h2>
      <div>
        <Link href='/119'>
          <a>View Dodgers Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/115'>
          <a>View Rockies Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/137'>
          <a>View Giants Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/158'>
          <a>View Padres Roster</a>
        </Link>
      </div>
      <div>
        <Link href='/109'>
          <a>View Diamondbacks Roster</a>
        </Link>
      </div>
      <div>
        <HittingLeaders stats={stats} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2021'&sort_column='avg'&leader_hitting_repeater`
  );

  const data = await res.json();
  const stats =
    data.leader_hitting_repeater.leader_hitting_mux.queryResults.row;

  return {
    props: {
      stats,
    },
  };
}
