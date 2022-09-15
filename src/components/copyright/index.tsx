import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Logo from '../Logo';
import { useStyles } from './Copyright.styles';

interface iCopyright {
  setActive?: (title: string) => void
}
const Copyright: React.FC<iCopyright> = ({ setActive }) => {
  const classes = useStyles()
  return (
    <Box className={classes.copyright}>
      <Box style={{ display: 'flex' }}>
        <Logo type='footer' setActive={setActive}/>
        <Typography variant='h6' className={classes.title}>My Books</Typography>
      </Box>
      <Box className={classes.textCopy}>© Copyright. 2022</Box>
    </Box>
  );
}

export default Copyright;