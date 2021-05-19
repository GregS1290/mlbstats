import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DivisionCard(props) {
  const classes = useStyles();
  const { division, teams } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color='textPrimary' gutterBottom>
          {division}
        </Typography>

        {teams.map((team) => (
          <Typography
            key={team.id}
            className={classes.pos}
            color='textSecondary'
          >
            <Link href={team.id}>
              <a>{team.club}</a>
            </Link>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
