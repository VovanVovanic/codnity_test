import { Box, Typography } from '@material-ui/core';
import React from 'react';

interface ITitle {
  title: string
}
const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <Typography
      variant='h5'
      style={{
        marginTop: "30px", fontFamily: "Georgia ", display: 'flex', justifyContent: "center", marginBottom: "20px"
      }}
    >{title}</Typography>
  );
}

export default Title;