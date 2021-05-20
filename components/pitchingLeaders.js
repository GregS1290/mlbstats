import PitcherCard from './pitcherStatsCard';

function PitchingLeaders({ stats }) {
  return (
    <>
      <h2>Pitching Leaders:</h2>

      {stats.map((player) => (
        <div key={player.player_id}>
          <PitcherCard playerStats={player} />
        </div>
      ))}
    </>
  );
}

export default PitchingLeaders;
