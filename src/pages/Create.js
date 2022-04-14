import React, {useState} from 'react'
import { FormControlLabel, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
// import { ButtonGroup } from '@material-ui/core'
// to create a wrapper around our content with basic margin and padding:
import { Container } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Radio } from '@material-ui/core'
import { RadioGroup } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { FormLabel } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//     backgroundColor: "violet",
//     "&:hover": {
//       backgroundColor: "blue"
//     }
//   },
//   title: {
//     textDecoration: "underline",
//     marginBottom: 20
//   }
// })

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})

export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState("todos")

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == "") {
      setTitleError(true)
    }
    if (details == "") {
      setDetailsError(true)
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push("/notes"))
    }
  }


  return (
    <Container>
      <Typography
        // className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)} 
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField 
          onChange={(e) => setDetails(e.target.value)} 
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={5}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>{/* Note Catergory */}</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="todo" control={<Radio />} label="To-Do" />
            <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
            <FormControlLabel value="learning" control={<Radio />} label="Learning" />
          </RadioGroup>
        </FormControl>

        <Button
        // className={classes.btn}
        // onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"

        endIcon={<KeyboardArrowRight />}
        // to remove dropshadow of the button use:
        /* disableElevation */
      >
        Create Note
      </Button>
      </form>
    </Container>
  )
}
