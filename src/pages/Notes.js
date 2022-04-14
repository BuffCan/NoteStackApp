import React, { useEffect, useState } from 'react'
import { Container, Grid, makeStyles, Paper } from '@material-ui/core'
// import { Paper } from '@material-ui/core'
import NoteCard from '../components/NoteCard'

const drawerWidth = 240

const useStyles = makeStyles({
  root: {
    width: `calc(100% - ${drawerWidth}px)`
  }
})

export default function Notes() {
  const classes = useStyles()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE"
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  return (
    <Container
      className={classes.root}
      fixed
      maxWidth="lg"
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid 
        item
        container
        maxWidth="80"
        direction="row"
        spacing={3}
        >
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
        </Grid>
      </Grid>
    </Container>
  )
}
