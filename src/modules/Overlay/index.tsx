
import { Box, Container } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { useStyles } from './Overlay.styles';

const Overlay: React.FC<{ children: NonNullable<ReactNode> }> = ({ children }) => {
  const classes = useStyles();
  return (

    <Box className={classes.overlay}>
      {children}
      </Box>

  );
}

export default Overlay;