import { ClassNames } from '@emotion/react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import Overlay from '../../modules/Overlay';
import { fetchBooks, fetchDeleteBook } from '../../redux/books/actions';
import { IbookItem } from '../../redux/books/types';
import { RootStateType } from '../../redux/store';
import { useStyles } from './Category.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import Loader from '../../modules/loader';


interface ICategory {
  title: string
  setTitle: (name: string) => void
  setBookData: (data:any) => void
}
const Category: React.FC<ICategory> = ({ title , setTitle, setBookData}) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const books = useSelector<RootStateType, Array<IbookItem>>((state) => state.books.books)
  const loading = useSelector<RootStateType, boolean>((state) => state.books.isLoading)
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [title])

  const handleClickOpen = (id:string, titleBook:string) => {
    setOpen(true);
    setName(titleBook)
    setId(id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    dispatch(fetchDeleteBook(id))
  };

  const handleClickEdit = (book:IbookItem) => {
    setTitle("Edit Book")
    navigate('/forms')
    setBookData(book)
  }

  const handleClickDetails = (book: IbookItem) => {
    setBookData(book)
    navigate('/details')
    
  }

  return (
    <Overlay>
      <Container>
        {loading ?
          <Loader /> :
          <Box className={classes.categoryPage}>
            <Title title={title} />
            <Grid container spacing={2} xs={12} className={classes.containerStyle}>
              {books.map((book, i) => {
                return (
                  <Grid item >
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        alt="image"
                        height="240"
                        image={book.url}
                        src={book.url}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                          {book.title}
                        </Typography>
                        <Typography variant="body2">
                          {book.author}
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.btns}>
                        <Button
                          variant="contained"
                          size='small'
                          color='secondary'
                          onClick={() => handleClickOpen(book._id, book.title)}
                          style={{ fontSize: "12px" }}
                          startIcon={<DeleteIcon />}>
                          Delete
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          style={{ fontSize: "12px" }}
                          onClick={() => handleClickEdit(book)}
                        >Edit</Button>
                        <Button
                          size="small"
                          variant="contained"
                          style={{ fontSize: "12px" }}
                          onClick={() => handleClickDetails(book)}
                        >Learn More</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Box>}
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete book ${name}?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Overlay>
  );
}

export default Category;