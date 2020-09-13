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

const nextHarvestText = (nextHarvest) =>{
  if(nextHarvest > 0){
    return `Days until harvest: ${nextHarvest}`
  }else if (nextHarvest == 0){
    return "Ready to harvest!"
  }else{
    return "";
  }
};

export default function Plant({plantName, plantDate, shortDescription, nextHarvest}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/plant.jpg"
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
          <Typography variant="body2" color="textSecondary" component="p">
            {nextHarvestText(nextHarvest)}
          </Typography>
        </CardContent>
      <CardActions>
      <Button variant="contained" size="small" color="primary">
          Water
        </Button>
        <Button size="small" color="primary">
         Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
