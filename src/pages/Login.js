import React, {useState} from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)
    setEmailError(false)
    setPasswordError(false)

    if (name == "") {
      setNameError(true)
    }
    if (email == "") {
      setEmailError(true)
    }
    if (password == "") {
      setPasswordError(true)
    }
    if (name && email && password) {
      console.log(name, email, password)
    }
    if (name && email && password) {
      fetch("http://localhost:7000/users", {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ name, email, password })
      }).then(() => history.push("/"))
    }
  }

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)} 
          className={classes.field}
          label="Username"
          variant="outlined"
          color="secondary"
          required
          error={nameError}
        />
        <TextField 
          onChange={(e) => setEmail(e.target.value)} 
          className={classes.field}
          label="Email"
          variant="outlined"
          color="secondary"
          multiline
          required
          error={emailError}
        />
        <TextField 
        onChange={(e) => setPassword(e.target.value)} 
        className={classes.field}
        label="Password"
        variant="outlined"
        color="secondary"
        multiline
        required
        error={passwordError}
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
