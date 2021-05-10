import { Avatar, Button, FormControl, Grid, Paper, Box, InputAdornment, FilledInput, Typography, makeStyles } from "@material-ui/core"
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import digitalRetail from '../assets/DIGITAL_RETAIL.png'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { login } from "../store/actions/userAction"
import Swal from 'sweetalert2'

let logo =
  "https://kinsta.com/wp-content/uploads/2018/03/content-management-system-2.png";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "55vw",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "55vw",
    },
  },
  formLogin: {
    maxWidth: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50vw",
      maxHeight: "80vh",
      padding: "60px 20px",
      margin: "auto",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "30vw",
      padding: "60px 20px",
      maxHeight: "65vh",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "30vw",
      padding: "70px 20px",
      maxHeight: "65vh",
    },
  },
  logo: {
    marginBottom: "0.5rem",
  },
  avatar: {
    backgroundColor: "#FFDB58",
    width: "5rem",
    height: "5rem",
  },
  title: {
    marginBottom: "0.8rem",
  },
  imageColoumn: {
    display: "flex",
    flexDirection: "column-reverse",
    margin: "auto",
  },
  button: {
    marginTop: "1.5rem",
    width: "100%",
    height: "3rem",
  },
}));

function Login() {
  const classes = useStyles()
  const {isLogin} = useSelector((state) => state.user)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (localStorage.length > 0) {
      history.push('/')
    }
  }, [])

  function changeUsername(e) {
    setUsername(e.target.value)
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function submitLogin() {
    let dataLogin = { username, password }
    dispatch(login(dataLogin))
    console.log("<<< Is Login >>>", isLogin);
    setUsername('')
    setPassword('')
    setTimeout(() => {
      console.log(isLogin, "<<< is login >>>");
      if (isLogin === true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push('/')
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Username or password invalid",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      
    }, 2000);
    
  }

  return (
    <div className='login'>
      <Grid container>
        {/* Form */}
        <Grid item xl={3} lg={4} md={4} sm={12} xs={12} style={{ margin: "3rem" }}>
          <Paper elevation={20} className={classes.formLogin}>
            <Grid align='center'>
              <div className={classes.logo}>
                <Avatar className={classes.avatar} src={logo} alt='CMS'></Avatar>
                <h1 className={classes.title}>Sign In</h1>
                <Typography variant='caption' >Welcome to IDR CMS System</Typography>
              </div>
              <FormControl variant='filled' component={Box} width='100%' marginBottom='7%!important'>
                <FilledInput
                  autoComplete='off'
                  placeholder='Input Your Username'
                  value={username}
                  onChange={(e) => changeUsername(e)}
                  startAdornment={
                    <InputAdornment position='start'>
                      <PersonIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl autoComplete='off' variant='filled' component={Box} width='100%'>
                <FilledInput
                  autoComplete='off'
                  type='password'
                  placeholder='Input Your Password'
                  value={password}
                  onChange={(e) => changePassword(e)}
                  startAdornment={
                    <InputAdornment position='start'>
                      <VpnKeyIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button type='submit' onClick={submitLogin} variant='contained' color='primary' className={classes.button}>
                Sign In
              </Button>
            </Grid>
          </Paper>
          {/* End of Form */}

        </Grid>
        <div className={classes.imageColoumn}>
          <Grid item xl={9} lg={8} md={8} sm={0} xs={0}>
            <img className={classes.image} src={digitalRetail} alt='Digital Retail' />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Login