import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: "block"
    }
  })

export default function Profile() {
    const classes = useStyles()

    return (
        <Container>
            <Typography 
            variant="h4"
            color="textPrimary"
            gutterBottom
            >
              Profile
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"

            >
              Username: Vadim
              <br />
              E-Mail: vadim@email.com
              <br />
              Password: ****
            </Typography>
        </Container>
  )
}
