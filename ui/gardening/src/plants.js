import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    minWidth: 300,
  },
  media: {
    height: 140,
  },
});

const nextHarvestText = (nextHarvest) => {
  if (nextHarvest > 0) {
    return (
      <Typography variant="body2" color="textSecondary" component="p">
        Days until harvest: {nextHarvest}
      </Typography>
    )
  } else if (nextHarvest == 0) {
    return (
      <Typography variant="body2" color="green" component="p">
        Ready to harvest!
      </Typography>
    )
  }
};

const waterButton = (nextWatering) => {
  // should prolly use some set state thing here 
  /// when plant is watered, record the date it was watered 
  if (nextWatering > 0) {
    return (<Button variant="contained" size="small" color="primary" disabled>
      Water
    </Button>
    )
  } else {
    return (<Button variant="contained" size="small" color="primary">
      Water
    </Button>
    )
  }
}

export default function Plant({ plantName, plantDate, shortDescription, nextHarvest, nextWatering, imageURL }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageURL}
        title={plantName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {plantName}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="h3">
          born on {plantDate}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDescription}
        </Typography>
        {nextHarvestText(nextHarvest)}
      </CardContent>
      <CardActions>
        {
          waterButton(nextWatering)
        }
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
