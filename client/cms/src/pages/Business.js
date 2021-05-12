import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { makeStyles, Paper, useTheme } from "@material-ui/core";
import Navigation from "../components/Navigation";
import Tabel from "../components/Tabel";
import { getCompanies } from "../store/actions/companyAction";

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
  tabelCompany: {
    margin: "1rem 1rem 0 1rem",
  },
}));

const header = [
  'BUSINESS UNIT', 'PARENT COMPANY', 'CREATED AT', 'MODIFIED AT' 
]
function BusinessUnit() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const theme = useTheme();
  const history = useHistory();

  const {companies, isLoading} = useSelector((state) => state.company)

  useEffect(() => {
    if (localStorage.length > 0) {
      dispatch(getCompanies());
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
            <h2 className={classes.pageTitle}> Business Unit</h2>
            <div className={classes.tabelCompany}>
              {
                isLoading? (
                  <Tabel data={[]} header={header} page={'business'}/>
                ) : (
                  <Tabel data={companies} header={header} page={'business'} />
                )
              }
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default BusinessUnit;
