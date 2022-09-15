import { Box, Button, ButtonGroup, Typography } from '@material-ui/core';
import React, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setBooksType } from '../../redux/books/actions';
import { useStyles } from './Navigation.styles';

interface INavigation {
  setTitle: (title: string) => void
  active: string
  setActive: (label: string) => void
}
const Navigation: React.FC<INavigation> = ({ setTitle, setActive, active }) => {
  const classes = useStyles();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const links = [
    { to: "/", label: "Main Page" },
    { to: "/category", label: "Fantastic" },
    { to: "/category", label: "Horrors" },
    { to: "/category", label: "Detective" }
  ]

  const onClickHandler = (title: string, to: string) => {
    setTitle(title)
    setActive(title)
    navigate(to)
    dispatch(setBooksType(title))
  }

  return (
    <ButtonGroup variant="text" aria-label="outlined button group">
      {links.map((item, i) => (
        <Button
          className={classes.btn}
          color={active !== item.label ? 'default' : "secondary"}
          size='small'
          key={i}
          onClick={() => onClickHandler(item.label, item.to)}
        >
          {item.label}
        </Button>

      ))}
    </ButtonGroup>
  );
}

export default Navigation;