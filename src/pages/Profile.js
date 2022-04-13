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
            <Typography variant="h2">hello</Typography>
        </Container>
  )
}
