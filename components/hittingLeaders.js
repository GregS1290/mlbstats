import PositionCard from './positionStatsCard';

function HittingLeaders({ stats }) {
  return (
    <>
      <h2>Hitting Leaders</h2>

      {stats.map((player) => (
        <div key={player.player_id}>
          <PositionCard playerStats={player} />
        </div>
      ))}
    </>
  );
}

export default HittingLeaders;
