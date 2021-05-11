import { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { makeStyles, Paper, useTheme, Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TextField } from "@material-ui/core";
import Navigation from "../components/Navigation";
import {useDispatch, useSelector} from 'react-redux'
import {getRoleByID,getEntity, getAction} from '../store/actions/roleAction'


const drawerWidth = 240
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
  entity: {
    textAlign: "left",
    marginLeft: "1rem",
    padding: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkBox: {
    "& > *": {
      margin: theme.spacing(1),
      width: "8ch",
    },
  },
  input: {
    min: 1
  }
}));

function RoleDetail() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const theme = useTheme()
  const history = useHistory();
  const {id} = useParams()
  const {roleById, actions, isLoading,entity} = useSelector((state)=> state.role)
  
  useEffect(() => {
    if (localStorage.length > 0) {
      dispatch(getEntity())
      dispatch(getRoleByID(id));
      dispatch(getAction())
    } else {
      history.push("/login");
    }
  }, []);

  // const actions = ['read', 'create','updated', 'assigned']
  return (
    <div className={classes.root}>
      <Navigation />
      <div className={classes.content}>
        <div className={classes.toolbar}>
          <Paper className={classes.dashboardPaper}>
            <h1 className={classes.pageTitle}> Role Detail</h1>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    {
                      actions.map(action => {
                        return <TableCell>{action.name.toUpperCase()}</TableCell>
                      })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                    {
                      entity.map((item, idx) => {
                        return (
                          <TableRow>
                              <>
                                <TableCell>{item.name}</TableCell>
                              </>
                              <>
                              {
                                actions.map(action => {
                                  return roleById.map(role => {
                                    console.log(role.Entity.name === item.name && role.Action.name === action.name , "<<< ini assigned");
                                    if (role.Entity.name === item.name && role.Action.name === action.name) {
                                      return(
                                        <TableCell className={classes.checkBox}>
                                          <TextField value={role.valueRole} InputProps={{inputProps: {min: 1, max: 4}}} size='small' type='number' variant="outlined" />
                                        </TableCell>
                                      ) 
                                    }
                                  })
                                })
                              }
                              </>
                          </TableRow>
                        )
                      })
                    }
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Grid container spacing={3}>
            <Grid item lg={3}>
            </Grid>
            <Grid item lg={9} className={classes.action}>
                {actions.map((action,idx) => {
                  return <div  key={idx}>{action}</div>
                })}     
            </Grid>
          </Grid>
            <Grid container spacing={3}>
            <Grid item lg={3}>
                {!isLoading ?
                entity.map((e,idx) =>{
                  return <div className={classes.entity} key={idx}>{e.name}</div>
                })
                :<></>
                }
            </Grid>
            <Grid item lg={9}>
              
            </Grid>
          </Grid> */}
            {/* <div>
              
            </div> */}
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default RoleDetail