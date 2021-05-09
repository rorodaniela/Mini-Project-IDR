import { Avatar, Button, FormControl, Grid, Paper, Box, InputAdornment, FilledInput, Typography } from "@material-ui/core"
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import digitalRetail from '../assets/DIGITAL_RETAIL.png'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { login } from "../store/actions/userAction"

let logo =
  "https://kinsta.com/wp-content/uploads/2018/03/content-management-system-2.png";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  function changeUsername(e) {
    setUsername(e.target.value)
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function submitLogin() {
    let dataLogin = { username, password }
    dispatch(login(dataLogin))
    setUsername('')
    setPassword('');
    history.push('/')
    
  }

  return (
    <div className='login'>
      <Grid container>

        {/* Form */}
        <Grid item xl style={{ margin: "3rem" }}>
          <Paper
            elevation={20}
            style={{
              padding: "60px 20px",
              width: "30vw",
              height: "70vh",
            }}
          >
            <Grid align='center'>
              <div style={{marginBottom: '25px'}}>
                <Avatar sizes='lg' src={logo} alt='CMS' style={{ backgroundColor: "#FFDB58", width: '5rem', height: '5rem' }}></Avatar>
                <h1 style={{ marginBottom: "10px" }}>Sign In</h1>
                <Typography variant='caption' >Welcome to IDR CMS System</Typography>
              </div>
              <FormControl
                variant='filled'
                component={Box}
                width='100%'
                marginBottom='2rem!important'
              >
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
              <FormControl
                autoComplete='off'
                variant='filled'
                component={Box}
                width='100%'
              >
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
              <Button
                type='submit'
                onClick={submitLogin}
                variant='contained'
                color='primary'
                style={{ marginTop: "2.5rem", width: '100%', height: '3rem' }}
              >
                Sign In
              </Button>
            </Grid>
          </Paper>
          {/* End of Form */}

        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            margin: 'auto'
          }}
        >
          <Grid item lg>
            <img src={digitalRetail} alt='Digital Retail' />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Login