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



export default function PlantExplore({ plantName, shortDescription, imageURL }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <img src={imageURL} alt={plantName} className={classes.media} />
        <Typography gutterBottom variant="h5" component="h2">
          {plantName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
