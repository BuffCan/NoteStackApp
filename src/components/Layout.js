import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Drawer } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { List } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { format } from 'date-fns'
import { Avatar } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';

const drawerWidth = 240

const useStyles = makeStyles((theme) =>{
    return {
        page: {
            background: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),
            display: "flex"
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(1),
        },
        button: {
            margin: 0
        }
    }
    
})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Login',
            icon: <LoginIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'My Workouts',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Workout',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
    <div className={classes.root}>
        {/* app bar */}
        <AppBar
            className={classes.appbar}
            elevation={1}
        >
            <Toolbar>
                <Typography className={classes.date}>
                   Welcome to FitStack, today is the { format(new Date(), 'do MMMM Y') }
                </Typography>
                <Typography>
                    User
                </Typography>
                <Button className={classes.button}><Avatar src="/default-user-image" className={classes.avatar} /></Button>
                
            </Toolbar>
        </AppBar>
        
        {/* side drawer */}  
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
        >
            <div>
                <Typography variant="h5" className={classes.title}>
                    Fitstack 
                    <Avatar
                        variant="round" 
                        src="/LOGO3.png" 
                        className={classes.avatar}
                        sx={{ width: 24, height: 24 }} 
                    />
                </Typography>
            </div>

            {/* list / links */}
            <List>
                {menuItems.map(item => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

        </Drawer>  
        
        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
        </div>
    </div>
  )
}
