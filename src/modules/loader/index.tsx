
import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';



const Loader= () => {
  return (
    <Box  style={{width: "90vw", height: "200px", display: "flex", alignItems: "center", justifyContent: "center",}}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;