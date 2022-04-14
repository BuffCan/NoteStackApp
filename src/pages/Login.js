import React, {useState} from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  btn: {
    marginLeft: 0,
    marginTop: 20,
    marginRight: 93
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
      }).then(() => history.push("/notes"))
    }
  }

  return (
    <Grid 
      container 
      className={classes.container}
      spacing= {0}
      direction= "column"
      alignItems= "center"
      justifyContent= "center"
    >
      <Grid item xs={7}>
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
      <Button
          href="/register"
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="outlined"
          endIcon={<KeyboardArrowRight />}
        >
          Sign Up
        </Button>
        </Grid>
    </Grid>

  )
}

