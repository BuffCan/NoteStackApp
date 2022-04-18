import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Typography } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { format } from 'date-fns'
import Dropdown from './Dropdown';

const drawerWidth = 240

const useStyles = makeStyles((theme) =>{
    return {
        page: {
            width: "100%",
            padding: theme.spacing(4)
        },
        root: {
            display: "flex"
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        button: {
            margin: 0
        },
        user: {
            marginRight: theme.spacing(1.5),
            fontSize: 18
        }
    }
    
})

export default function Appbar({children}) {
    const classes = useStyles()

    return (
    <div className={classes.root}>
        {/* app bar */}
        <AppBar
            className={classes.appbar}
            elevation={1}
        >
            <Toolbar>
                <Typography className={classes.date}>
                   Welcome to NoteStack, today is the { format(new Date(), 'do MMMM Y') }
                </Typography>
                <Typography className={classes.user}>
                    Vadim
                </Typography>
                <Dropdown />                
            </Toolbar>
        </AppBar>
        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
        </div>
    </div>
  )
}