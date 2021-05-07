// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function (req, res) {
  const { data } = await axios.get(
    'http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%272021%27&player_id=%27592450%27'
  );
  console.log(data.sport_hitting_tm.queryResults);

  const ops = data.sport_hitting_tm.queryResults.row.ops;
  res.status(200).send(ops);
}
