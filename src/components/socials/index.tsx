import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Socials.styles';


const Socials = () => {
  const classes = useStyles()
  const links = [
    { to: 'http://www.facebook.com', icon: faFacebook},
    { to: 'http://www.instagram.com', icon: faInstagram },
    { to: 'http://www.twitter.com',  icon: faTwitter }
  ]
  return (
    <Box className={classes.socials}>
      <Typography variant='h6' className={classes.title}>Socials:</Typography>
      <Box>
        {links.map((el) => {
          return (
            <a href={el.to} target='_blank' key={el.to}>
              <FontAwesomeIcon icon={el.icon} className={classes.icon} />
            </a>

          )
        })}
      </Box>

    </Box>
  );
}

export default Socials;