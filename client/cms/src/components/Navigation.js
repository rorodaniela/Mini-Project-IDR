import { AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Navigation() {
  return (
    <AppBar position="static" color='transparent' style={{boxShadow: 'none'}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6">
          Inovasi Digital Retail
        </Typography>
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation