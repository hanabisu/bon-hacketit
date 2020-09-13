import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./dashboard.js";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GettingStarted } from "./gettingStarted";
import { Explore } from "./explore";
import { Settings } from "./settings";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import ExploreIcon from "@material-ui/icons/Explore";
import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "green",
  },
  menuButton: {},
  title: {
    flexGrow: 1,
    color: "black",
  },
  bgcolor: {
    background: "#E0EEE0",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button
          key="Getting Started"
          component={Link}
          to="/getstarted"
        >
          <ListItemIcon>{<EcoIcon />}</ListItemIcon>
          <ListItemText primary="Getting Started" />
        </ListItem>
        <ListItem button key="Explore" component={Link} to="/explore">
          <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        <ListItem button key="Settings" component={Link} to="/settings">
          <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
          <ListItemText primary="Settings" />
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
        {["Logout"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgcolor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Garden Gnome
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/getstarted">
          <GettingStarted />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );

  // <Dashboard/>;
}

export default App;
