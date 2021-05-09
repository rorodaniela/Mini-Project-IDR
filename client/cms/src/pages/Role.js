import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Paper, useTheme } from "@material-ui/core";
import Navigation from "../components/Navigation";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  dashboardPaper: {
    height: "85vh",
  },
  pageTitle: {
    textAlign: "left",
    padding: "0.5rem 0 0 1rem",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(8),
  },
}));

function Role() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.length > 0) {
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <div className={classes.root}>
      <Navigation />
      <div className={classes.content}>
        <div className={classes.toolbar}>
          <Paper className={classes.dashboardPaper}>
            <h1 className={classes.pageTitle}> Role</h1>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Role;
