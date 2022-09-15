
import { Box, Container } from '@material-ui/core'; 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import BookForm from '../../modules/bookForm';
import Overlay from '../../modules/Overlay';
import { IbookItem } from '../../redux/books/types';
import { useStyles } from './Forms.Styles';


interface IForms {
  title: string
  bookData?: IbookItem | null
  setTitle: (t:string)=> void
}
const Forms: React.FC<IForms> = ({ setTitle,  title, bookData }) => {
  const classes = useStyles();


  return (
    <Overlay>
      <Container>
        <Box className={classes.formPage}>
          <Title title={title} />
          <BookForm setTitle={setTitle }{...bookData} />
        </Box>
      </Container>
    </Overlay>
  );
}

export default Forms;