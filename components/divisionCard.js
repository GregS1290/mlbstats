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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color='textPrimary' gutterBottom>
          AL East
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          <Link href='/147'>
            <a>Yankees</a>
          </Link>
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          <Link href='/111'>
            <a>Red Sox</a>
          </Link>
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          <Link href='/141'>
            <a>Blue Jays</a>
          </Link>
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          <Link href='/139'>
            <a>Rays</a>
          </Link>
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          <Link href='/110'>
            <a>Orioles</a>
          </Link>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
