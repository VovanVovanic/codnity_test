import { Box, Chip, Container } from '@material-ui/core';
import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import Overlay from '../../modules/Overlay';
import { fetchArticles, sortArticles } from '../../redux/articles/actions';
import { iArticle } from '../../redux/articles/types';
import { RootStateType } from '../../redux/store';
import { useStyles } from './Main.styles';


const Main = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const articles = useSelector<RootStateType, Array<iArticle>>((state) => state.articles.items)
  const loading= useSelector<RootStateType, boolean>((state) => state.articles.isLoading)


  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  const handleSort = (tag: string) => {
    dispatch(sortArticles(tag))
  }
  
  return (
    <Overlay>
      <Container >
        <Box className={classes.main}>
          <Title title={'Main Page'} /> 
          {articles.map((el, i) => {
            const tags = el.tags.split(',')
            return (
              <Box key={i}>
                <Typography variant='h6' className={classes.title}>
                  {el.title}
                  <Box>
                    <span style={{paddingRight: '20px', fontSize: '16px'}}>Tags: </span>
                    {tags.map((tag, index) => {
                      return (
                        <Chip key={index} label={tag} onClick={() => handleSort(tag)} />
                      )
                    })}
                  </Box>

                </Typography>
                <Typography paragraph={true}>
                  {el.text}
                </Typography>
              </Box>
            )
          })}

        </Box>
      </Container>
    </Overlay>
  );
}

export default Main;