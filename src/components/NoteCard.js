import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { teal } from '@material-ui/core/colors';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        background: (note) => {
            if (note.category == "todo") {
                return deepPurple[100]
            }
            if (note.category == "reminder") {
                return blue[100]
            }
            if (note.category == "work") {
                return teal[100]
            }
            if (note.category == "learning") {
                return blueGrey[100]
            }
        }
    }
})

export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)

    return (
        <div>
            <Card
                display="block"
                elevation={7}
                className={classes.root}
            >
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent className={classes.cardContent}>
                    <Typography 
                        variant="body2" 
                        color="textSecondary"
                    >
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
    </div>
  )
}
