import { Box, Container} from '@material-ui/core';
import { title } from 'process';
import React from 'react';
import Title from '../../components/Title';
import Overlay from '../../modules/Overlay';

interface ICategory {
title: string
}
const Category: React.FC<ICategory> = ({title}) => {
  return (
    <Overlay>
      <Container>
        <Box>
          <Title title={title} />
        </Box>
      </Container>
    </Overlay>
  );
}

export default Category;