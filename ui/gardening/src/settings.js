import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: "sm",
    padding: theme.spacing(2),
    textAlign: "left",
  },
  rootSlider: {
    width: 250,
  },
  inputSlider: {
    width: 42,
  },
  textbox: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function GardenSize() {
  const classes = useStyles();

  return (
    <form className={classes.textbox} noValidate autoComplete="off">
      <TextField id="standard-size-normal" label="Area" defaultValue="3 sqft" />
    </form>
  );
}

function Location() {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <LocationOnIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Location"
            defaultValue="Vancouver, BC"
          />
        </Grid>
      </Grid>
    </div>
  );
}

function HoursOfLight() {
  const classes = useStyles();
  const [value, setValue] = React.useState(10);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 24) {
      setValue(24);
    }
  };

  return (
    <div className={classes.rootSlider}>
      <Typography id="input-slider" gutterBottom>
        Average Hours of Light Recieved by Garden per Day
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Brightness6Icon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={24}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.inputSlider}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 24,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

function GardenType() {
  const [value, setValue] = useState("indoor");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Garden Type</FormLabel>
      <RadioGroup
        aria-label="gardenType"
        name="gardenType"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="indoor" control={<Radio />} label="Indoor" />
        <FormControlLabel value="outdoor" control={<Radio />} label="Outdoor" />
      </RadioGroup>
    </FormControl>
  );
}

export function Settings() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <h2>Settings</h2>
        <Paper elevation={0} className={classes.paper}>
          <Grid container wrap="nowrap" spacing={3}>
            <Grid item xs>
              <h3>My Location</h3>
              {<Location />}
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={0} className={classes.paper}>
          <Grid container wrap="nowrap" spacing={3}>
            <Grid item xs>
              <h3>Size of my garden</h3>
              {<GardenSize />}
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={0} className={classes.paper}>
          <Grid container wrap="nowrap" spacing={3}>
            <Grid item xs>
              <h3>Type of garden</h3>
              {<GardenType />}
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={0} className={classes.paper}>
          <Grid container wrap="nowrap" spacing={3}>
            <Grid item xs>
              <h3>Amount of Light</h3>
              {<HoursOfLight />}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
