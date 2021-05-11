import { useEffect, useState } from "react";
import {makeStyles, Paper, FormControl, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  formModal: {
    width: "40vw",
    height: "85vh",
    margin: "5vh auto auto auto",

    padding: "0.5rem",
  },
  title: {
    textAlign: "center",
  },
  createForm: {
    margin: "10px 10%",
    width: "80%",
  },
  submitButton: {
    marginLeft: "10%",
  },
  cancleButton : {
    marginLeft: "4%"
  }
}));

function FormModal(props) {
  const classes = useStyles();

  const [newData, setNewData] = useState({
    id: "",
    username: "",
    password: "",
    CompanyId: "",
    RoleId: "",
    manager: "",
    status: true,
  });

  useEffect(()=> {
    setNewData({
      id: props.user ? props.user.id : "",
      username: props.user ? props.user.username : "",
      password: props.user ? props.user.password : "",
      CompanyId: props.user ? props.user.CompanyId : "",
      RoleId: props.user ? props.user.RoleId : "",
      manager: props.user ? props.user.manager : "",
      status: props.user ? props.user.status : true,
    });
  }, [props.user])

  const onChangenewData = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const {id, username, CompanyId, RoleId, manager, status } = newData
    switch (props.action) {
      case "create user":
        props.submit(newData);
        break;
      case "edit user":
        props.submit({ id, username, CompanyId, RoleId, manager, status });
        break;
      default: 
        props.close()
    }    
  };

  const handleClose = () => {
    props.close()
  }
  
  return (
    <>
      <Paper className={classes.formModal}>
        <h1 className={classes.title}> {props.action.toUpperCase()} FORM</h1>
        <form>
          <FormControl className={classes.createForm}>
            <TextField
              required
              onChange={(e) => onChangenewData(e)}
              value={newData.username}
              label='Username'
              name='username'
              variant='outlined'
            />
          </FormControl>
          {
            props.action === 'create user' ? (
              <FormControl className={classes.createForm}>
                <TextField
                  required
                  onChange={(e) => onChangenewData(e)}
                  value={newData.password}
                  label='Password'
                  name='password'
                  variant='outlined'
                />
              </FormControl>
            ) : (
              <>
              </>
            )
          }
          <FormControl className={classes.createForm} variant='outlined'>
            <InputLabel id='select-company'>Company</InputLabel>
            <Select
              required
              onChange={(e) => onChangenewData(e)}
              value={newData.CompanyId}
              labelId='select-company'
              name='CompanyId'
            >
              {props.companies?.map((company) => {
                return <MenuItem value={company.id}>{company.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.createForm} variant='outlined'>
            <InputLabel id='select-role'>Role</InputLabel>
            <Select
              required
              onChange={(e) => onChangenewData(e)}
              value={newData.RoleId}
              labelId='select-role'
              name='RoleId'
            >
              {props.roles?.map((role) => {
                return <MenuItem value={role.id}>{role.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.createForm}>
            <TextField
              required
              onChange={(e) => onChangenewData(e)}
              value={newData.manager}
              label='Manager'
              name='manager'
              variant='outlined'
            />
          </FormControl>
        </form>
        <Button
          onClick={handleSubmit}
          className={classes.submitButton}
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
        <Button
          onClick={handleClose}
          className={classes.cancleButton}
          variant='contained'
          color='primary'
        >
          Cancle
        </Button>
      </Paper>
    </>
  );
}

export default FormModal