import DivisionCard from '../components/divisionCard';
import { alEast } from '../teamdata';

export default function divisions() {
  return (
    <>
      <DivisionCard teams={alEast} division={'AL East'} />
      <br></br>
      <DivisionCard teams={alEast} division={'AL East'} />
    </>
  );
}
