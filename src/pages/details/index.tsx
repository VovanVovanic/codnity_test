import { Container, Box, Paper, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Details.styles';
import Overlay from '../../modules/Overlay';
import Title from '../../components/Title';
import { IbookItem } from '../../redux/books/types';


interface IDetails {
  details: IbookItem | undefined | null
}
const Details:React.FC<IDetails> = ({details}) => {
  const classes = useStyles()
  const url = "https://images.pexels.com/photos/3996433/pexels-photo-3996433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <Overlay>
      <Container>
        <Box className={classes.formPage}>
          <Title title={`Details: ${details && details.title}`} />
          <Paper>
            <CardMedia
              component="img"
              alt="image"
              height="340"
              image={url}
              src={url}
            />
            <Typography variant="h5" className={classes.introducions}>
              Read the introduction:
              <Typography variant="h6">{details && details.title}. Written by: {details && details.author}.</Typography>
            </Typography>
            <Typography variant = "body2" style={{padding: "20px"}}>
              {details && details.description}
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Overlay>
  );
}

export default Details;