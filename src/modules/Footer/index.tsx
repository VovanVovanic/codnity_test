import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import Copyright from '../../components/copyright';
import Sites from '../../components/saites';
import Socials from '../../components/socials';
import { useStyles } from './Footer.styles';


interface iFooter {
  setActive?: (title: string) => void
}
const Footer:React.FC<iFooter> = ({setActive}) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
        <Container maxWidth='lg' className={classes.footerContainer}>
          <Box className={classes.info}>
            <Copyright setActive={setActive} />
          </Box>
        <Sites />
        <Socials />
        </Container>
    </footer>
  );
}

export default Footer;