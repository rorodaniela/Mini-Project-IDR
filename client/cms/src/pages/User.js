import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, createMuiTheme, makeStyles, Modal, Paper, useTheme } from "@material-ui/core";
import Navigation from "../components/Navigation";
import Tabel from "../components/Tabel";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, createUser, getUserByID, editUser, updateUser, clearUserById } from "../store/actions/userAction";
import { getRoles } from "../store/actions/roleAction";
import { getCompanies } from "../store/actions/companyAction";
import FormModal from "../components/FormModal";

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00e676",
    },
  },
});

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
  title: {
    textAlign: 'center'
  }, 
  subTitle: {
    textAlign: "left",
    margin: "0 0 0 10px",
  },
  tabelUser: {
    margin: "1rem 1rem 0 1rem",
  },
  createButton: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "1rem 1rem 0 1rem"
  },
  formModal : {
    width: '40vw',
    height: '85vh',
    margin: '5vh auto auto auto',

    padding: '0.5rem'
  },
  createForm: {
    margin: '10px 10%',
    width: '80%'
  },
  submitButton: {
    marginLeft: '40%'
  }
}));

const header = [
  'Username', 'Company', 'Role', 'Manager', 'Status'
]

function User() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.user)
  const { roles } = useSelector((state) => state.role)
  const { companies } = useSelector((state) => state.company)

  const [openModal, setOpenModal] = useState(false)
  const [actionStatus, setActionStatus] = useState('')


  useEffect(() => {
    if (localStorage.length > 0) {
      dispatch(getUsers())
      dispatch(getRoles())
      dispatch(getCompanies())
    } else {
      history.push("/login");
    }
  }, []);

  const handleCreateUser = () => {
    setActionStatus('create user')
    dispatch(clearUserById())
    setOpenModal(true)
  }

  const handleEditUser = () => { // ID masih hardcode
    dispatch(getUserByID(1))
    setActionStatus('edit user')
    setOpenModal(true)
  }

  const handleUpdateUser = () => {
    dispatch(updateUser({ id: 1, status: false}))
  };

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = (newData) => {
    switch (actionStatus) {
      case "create user":
        dispatch(createUser(newData));
        break;
      case "edit user":
        dispatch(editUser(newData));;
        break;
      case "update use":
        dispatch(updateUser(newData));;
        break;
      default:
        handleCloseModal()
      break;
    }

    handleCloseModal()

  }
  

  return (
    <div className={classes.root}>
      <Navigation />
      <Modal open={openModal} close={handleCloseModal}>
        <FormModal
          roles={roles}
          companies={companies}
          user={user}
          action={actionStatus}
          open={openModal}
          close={handleCloseModal}
          submit={handleSubmit}
        />
      </Modal>

      <div className={classes.content}>
        <div className={classes.toolbar}>
          <Paper className={classes.dashboardPaper}>
            <h3 className={classes.pageTitle}>User - List</h3>
            <Box className={classes.informationBox}>
              <h3 className={classes.subTitle}> User Information</h3>
            </Box>
            <div className={classes.createButton}>
              <Button
                onClick={handleCreateUser}
                variant='contained'
                color='primary'
              >
                Create User
              </Button>
              <Button
                onClick={handleEditUser}
                variant='contained'
                color='primary'
              >
                Update
              </Button>
              <Button
                onClick={handleUpdateUser}
                variant='contained'
                color='primary'
              >
                Delete
              </Button>
            </div>
            <div className={classes.tabelUser}>
              <Tabel data={users} header={header} close={handleCloseModal} />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default User;
