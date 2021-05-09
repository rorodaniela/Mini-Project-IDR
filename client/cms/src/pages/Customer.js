import { useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { Box, makeStyles, Paper, useTheme } from "@material-ui/core";
import Navigation from "../components/Navigation";
import Tabel from "../components/Tabel";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../store/actions/customerAction";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(8),
  },
  dashboardPaper: {
    height: "85vh",
  },
  pageTitle: {
    textAlign: "left",
    padding: "1rem 0 0 1rem",
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
  tabelCustomer: {
    margin: "1rem 1rem 0 1rem",
  },
}));

const header = [
  'NAME', 'CREATED INFORMATION', 'MODIFIED INFORMATION', 'STATUS ACTIVE'
]

function Customer() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch()

  const {customers} = useSelector((state)=> state.customer)

  useEffect(() => {
    if (localStorage.length > 0) {
      dispatch(getCustomers())
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
            <h3 className={classes.pageTitle}>Customer - List</h3>
            <Box className={classes.informationBox}>
              <h3 className={classes.subTitle}> User Information</h3>
            </Box>
            <div className={classes.tabelCustomer}>
              <Tabel data={customers} header={header}/>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Customer;
