import { Box, Typography } from '@material-ui/core';
import React from 'react';

interface ICategory {
title: string
}
const Category: React.FC<ICategory> = ({ title }) => {
  return (
    <Box >
      <Typography variant = 'h3'>{ title}</Typography>
    </Box>
  );
}

export default Category;