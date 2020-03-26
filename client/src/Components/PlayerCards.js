import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  card: {
    width: '75%',
    marginBottom: '1rem'
  }
});

const PlayerCards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography component="div">
        <Box
        fontSize="h4.fontSize" 
        fontWeight="fontWeightMedium"
        textAlign="center"
        m={1}
        >
          {props.data.name}
        </Box>
        <Box
        fontWeight="fontWeightLight"
        fontSize="h5.fontSize"
        textAlign="center" 
        m={1}
        >
          {props.data.country}
        </Box>
        <Box
        textAlign="center" 
        m={1}
        >
          most searches: {props.data.searches}
        </Box>
      </Typography>
    </Card>
  )
}

export default PlayerCards
