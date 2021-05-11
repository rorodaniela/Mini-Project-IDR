import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Paper, useTheme } from "@material-ui/core";
import Navigation from "../components/Navigation";
import Tabel from "../components/Tabel";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../store/actions/roleAction";

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
  tabelRole: {
    margin: "1rem 1rem 0 1rem",
  },
}));

function Role() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const {roles, isLoading} = useSelector((state)=> state.role)
  const dispatch = useDispatch()
  const header = [
    'NAME'
  ]

  useEffect(() => {
    if (localStorage.length > 0) {
      dispatch(getRoles())
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
            <h3 className={classes.pageTitle}> Role - List</h3>
            <div className={classes.tabelRole}>
              {
                isLoading? (
                  <Tabel data={[]} header={header} page={'role'}/>
                ) : (
                  <Tabel data={roles} header={header} page={'role'}/>
                )
              }
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Role;
