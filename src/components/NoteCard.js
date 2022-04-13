import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const useStyles = makeStyles({

})

export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles()

    return (
        <div>
            <Card
                display="block"
                elevation={2}
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
