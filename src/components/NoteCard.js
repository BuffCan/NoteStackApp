import React, { useState } from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { teal } from '@material-ui/core/colors';
// import { blueGrey } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
// import NoteCard from '../components/NoteCard'


const useStyles = makeStyles({
    root: {
        background: (note) => {
            if (note.category == "todo") {
                return deepPurple[200]
            }
            if (note.category == "reminder") {
                return blue[200]
            }
            if (note.category == "work") {
                return teal[200]
            }
            if (note.category == "learning") {
                return orange[200]
            }
        },
        padding: 0
    },
    edit: {
        minWidth: "100%"
    },
    cardContent: {
        minWidth: "90%"
    }
    
})

export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)
    const [isEditable, setIsEditable] = useState(false);
    const [details, setDetails] = useState(note.details);

    const handleEdit = (e) => {
        setIsEditable(!isEditable)
      };

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
                        <TextField
                        className={classes.edit}
                        disabled={!isEditable}
                        direction="block"
                        fullWidth
                        multiline
                        InputProps={{ disableUnderline: true }}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        onBlur={() => setIsEditable(false)}
                        />

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleEdit}>
                        Edit
                    </Button>
                </CardActions>
            </Card>
    </div>
  )
}
