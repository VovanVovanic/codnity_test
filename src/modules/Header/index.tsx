import { AppBar, Toolbar, Box, Button, Typography, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './Header.styles';
import Navigation from '../../components/Navigation';
import Logo from '../../components/Logo';
import { useNavigate } from 'react-router';
import { IbookItem } from '../../redux/books/types';

interface iHeader {
  setTitle: (title: string) => void
  title: string
  setBookData: (book: IbookItem | null)=> void
}

const Header: React.FC<iHeader> = ({ setTitle, title, setBookData }) => {
 
  const [active, setActive] = useState<string>(title)
  const classes = useStyles();
  const navigate = useNavigate()

  useEffect(() => {
    setActive(title)
  }, [title])
  
  const addBookHandler = () => {
    setTitle("Add Book")
    setBookData(null)
    navigate('/forms')
  }
  return (
   
    <AppBar component="nav" className={classes.header}>
      <Container style={{position: "relative"}}>
        <Toolbar disableGutters={true}>
        <Logo setActive={ setActive} type="header"/>
        <Navigation setTitle={setTitle} active={active} setActive={ setActive} />
        </Toolbar>
        <Box className={classes.title}>
          <Typography align="center" variant='h4' className={classes.mainTitle}>My Books</Typography>
          <Button
            className={classes.btn}
            variant="contained"
            color="default"
            size="small"
            onClick={addBookHandler}
            style={{width: "100px" }}
          > Add Book</Button>
        </Box>

      </Container>
      </AppBar>
   
  );
}

export default Header;