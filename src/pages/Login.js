import React, {useState} from 'react'
import { FormControlLabel, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Radio } from '@material-ui/core'
import { RadioGroup } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { FormLabel } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})

export default function Login() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState("todos")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Enter Login Details
      </Typography>

      <form noValidate autoComplete="off" >
        <TextField
          onChange={(e) => setTitle(e.target.value)} 
          className={classes.field}
          label="Username"
          variant="outlined"
          color="secondary"
          required
          error={titleError}
        />
        <TextField 
          onChange={(e) => setDetails(e.target.value)} 
          className={classes.field}
          label="Password"
          variant="outlined"
          color="secondary"
          multiline
          required
          error={detailsError}
        />

        <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
        >
          Log In
        </Button>
      </form>
    </Container>
  )
}
