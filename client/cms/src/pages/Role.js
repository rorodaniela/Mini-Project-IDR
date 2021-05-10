import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Paper, useTheme, Box, Grid } from "@material-ui/core";
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
  informationBox: {
    border: "1px solid grey",
    borderRadius: "10px",
    margin: "1rem 1rem 0 1rem",
    height: "10vh",
  },
  subTitle: {
    textAlign: "left",
    margin: "0 0 0 10px",
  },
  actionBox: {
    border: "1px solid grey",
    borderRadius: "10px",
    margin: "1rem 1rem 0 1rem",
    height: "60vh",
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
            <h2 className={classes.pageTitle}> Role</h2>
            <Box className={classes.informationBox}>
              <h3 className={classes.subTitle}>Role Name</h3>
            </Box>
            <Box className={classes.actionBox}>
              
            </Box>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Role;
