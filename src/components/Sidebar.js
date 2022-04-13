import { makeStyles } from '@material-ui/core'
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
import { Avatar } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
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
        avatar: {
            marginLeft: theme.spacing(1),
        }
    }
})

export default function Sidebar() {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Login',
            icon: <LoginIcon color="secondary" />,
            path: '/login'
        },
        // {
        //     text: 'Profile',
        //     icon: <AccountCircle color="secondary" />,
        //     path: '/profile'
        // },
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/notes'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        NoteStack 
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
        </div>
    );
}

