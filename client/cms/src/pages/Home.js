import { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core";
import Navigation from "../components/Navigation";

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  pageTitle: {
    textAlign: "left",
    padding: "0.5rem 0 0 1rem"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(8),
  }
}));

function Home() {
  const classes = useStyles()
  const theme = useTheme()
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
          <h1 className={classes.pageTitle}> HOME</h1>
        </div>
      </div>
    </div>
  )
}

export default Home