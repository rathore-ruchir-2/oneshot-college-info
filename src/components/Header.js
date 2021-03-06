import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import logo from './logo.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#03CBBB',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const themeColor = '#03CBBB'


export default function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    console.log(props);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" noWrap style={{color: "#ffffff", cursor: 'pointer'}} onClick={console.log(props)} >
            <img src={logo} style={{width: '30px', height: '30px'}}></img>
              <span style={{fontSize: '30px', margin: '0px', padding: '0px'}}> C</span>ollege 
              <span style={{fontSize: '30px', margin: '0px', padding: '0px'}}> C</span>amp
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            
            <ListItem button>
                <a href='/dashboard' style={{textDecoration: 'none', color: 'black'}}>
                    <ListItemIcon><MenuBookIcon style={{color: themeColor}}/></ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                </a>    
            </ListItem>

            <ListItem button>
                <a href="/home" style={{textDecoration: 'none', color: 'black'}}>
                    <ListItemIcon><HomeIcon style={{color: themeColor}}/></ListItemIcon>
                    <ListItemText primary={'All Colleges'} />
                </a>    
            </ListItem>

            <ListItem button>
                <a href="/colleges/all-states" style={{textDecoration: 'none', color: 'black'}}>
                    <ListItemIcon><MenuBookIcon style={{color: themeColor}}/></ListItemIcon>
                    <ListItemText primary={'Colleges Statewise'} />
                </a>    
            </ListItem>
            <ListItem button>
                <a href="/colleges/all-courses" style={{textDecoration: 'none', color: 'black'}}>
                    <ListItemIcon><MenuBookIcon style={{color: themeColor}}/></ListItemIcon>
                    <ListItemText primary={'Colleges Sort by Course'} />
                </a>    
            </ListItem>
          </List>
          <Divider />
          
        </Drawer>
      </div>
    );
  }
  