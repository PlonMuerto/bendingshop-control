import React, {useState} from 'react';

//router
import { Link } from 'react-router-dom';

//components
import Logo from '../logo/logo';

//material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//menu
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MessageIcon from '@material-ui/icons/Message';




//css
import './navegacion.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    }
  },
});





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

function Navegacion(props) {
    const [toggle, setToggle] = useState(false);
    const classes = useStyles();

    const toggleMenu =function(){
        setToggle(state=>{
            return !state;
        });
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton onClick={toggleMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Logo />
                    </Typography>
                    <Button color="inherit"><Link to="/login">Ingresar</Link></Button>
                    </Toolbar>
                </AppBar>
                </ThemeProvider>
            </div>
            <div className={toggle ? 'menuControls' : 'menuControls actived'}>
                <IconButton onClick={toggleMenu} edge="start" className='toggleButton' color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>

                <List className={"linksConteiner " + (toggle ? null : 'close')}>
                    <Link style={{width:'100%'}} to="/home">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to="/users">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Usuarios" />
                        </ListItem>
                    </Link>


                    
                    <Link to="/products">
                        <ListItem button>
                            <ListItemIcon>
                                <CardGiftcardIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Productos"/>
                        </ListItem>
                    </Link>
                    <Link to="/sells">
                        <ListItem button>
                            <ListItemIcon>
                                <LocalAtmIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ventas" />
                        </ListItem>
                    </Link>
                    
                    <Link to="/messages">
                        <ListItem button>
                            <ListItemIcon>
                                <MessageIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Mensajes" />
                        </ListItem>
                    </Link>
                    
                </List>
            </div>
        </React.Fragment>
    );
}

//import { Link } from 'react-router-dom';

//components
//import Logo from '../logo/logo';

/*
const Navegacion2 = ()=>{

    return(
        <div className="navegacion">
            <Logo />
            
            <div className="linksConteiner">
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/sells">Sells</Link>
                <Link to="/users">Users</Link>
                <Link to="/messages">Messages</Link>
                {
                    false 
                    ?
                    <Link to="/login">Login</Link>
                    :
                    null
                }
            </div>
        </div>
    );
};
*/

export default Navegacion;