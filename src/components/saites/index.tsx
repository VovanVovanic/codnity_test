import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Sites.styles';


const Sites = () => {
  const classes = useStyles()
  const links = [
    { to: 'http://www.google.com', label: 'Google' },
    { to: 'http://www.yandex.ru', label: 'Yandex' },
    { to: 'http://www.rambler.ru', label: 'Rambler' }
  ]
  return (
    <Box className={classes.sites}>
      <Typography variant='h6' className={classes.title}>Services:</Typography>
      {links.map((el) => {
        return (
          <a href={el.to} target='_blank' key={el.label} className={classes.link}>{ el.label}</a>
        )
      })}
    </Box>
  );
}

export default Sites;