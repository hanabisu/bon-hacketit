import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './dashboard.js'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { green } from '@material-ui/core/colors';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ExploreIcon from '@material-ui/icons/Explore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "green",
  },
  menuButton: {

  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button key='Getting Started'>
            <ListItemIcon>{<EcoIcon/>}</ListItemIcon>
            <ListItemText primary='Getting Started' />
          </ListItem>
          <ListItem button key='Explore'>
            <ListItemIcon>{<ExploreIcon/>}</ListItemIcon>
            <ListItemText primary='Explore' />
          </ListItem>
          <ListItem button key='Settings'>
            <ListItemIcon>{<SettingsIcon/>}</ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
      </List>

      {/* <List>
        {['Getting Started', 'Explore', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <List>
        {['Logout'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            My Plants
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>{list('right')}</Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function App() {

  return <> <ButtonAppBar />
    <Dashboard /></>;

  // <Dashboard/>;
}

export default App;
