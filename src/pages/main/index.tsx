import { Box, Chip, Container } from '@material-ui/core';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import Loader from '../../modules/loader';
import Overlay from '../../modules/Overlay';
import { fetchArticles, setType} from '../../redux/articles/actions';
import { iArticle } from '../../redux/articles/types';
import { RootStateType } from '../../redux/store';
import { useStyles } from './Main.styles';


const Main = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const articles = useSelector<RootStateType, Array<iArticle>>((state) => state.articles.items)
  const loading = useSelector<RootStateType, boolean>((state) => state.articles.isLoading)
  const tagName = useSelector<RootStateType, string | null>((state) => state.articles.tag)
  

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])


  const handleSort = (tag: string) => {
    dispatch(setType(tag))
    dispatch(fetchArticles())
  }

  
  return (
    <Overlay>
      <Container >
        {loading ?
          <Loader /> :
          <Box className={classes.mainPage}>
            <Title title={'Main Page'} />
            {articles.map((el, i) => {
              const tags = el.tags
              return (
                <Box key={i} className={classes.item}>
                  <Typography variant='h6' className={classes.title}>
                    {el.title}
                    <Box className={classes.author}> Author: {el?.user.userName}</Box>
                    <Box style={{ paddingTop: "20px", display: "flex", flexDirection: "column" }} className={classes.tags}>
                      <span className={classes.tagName}>Tags: </span>
                      <Box>
                        {tags.map((tag, index) => {
                          return (
                            <Chip key={index} label={tag} onClick={() => handleSort(tag)} className={classes.tag} />
                          )
                        })}
                        <Chip label={"All"} onClick={() => handleSort("All")} className={classes.tag}/>
                      </Box>

                    </Box>

                  </Typography>
                  <Typography paragraph={true}>
                    {el.text}
                  </Typography>
                
                </Box>
              )
            })}

          </Box>}
      </Container>
    </Overlay>
  );
}

export default Main;