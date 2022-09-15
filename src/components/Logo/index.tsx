
import React from 'react';
import { useStyles } from './Logo.styles';
import { ReactComponent as Logotype } from '../../assets/logo.svg'
import { useNavigate } from 'react-router';


interface iLogo {
  setActive?: (title: string) => void
  type: string
}

const Logo:React.FC<iLogo> = ({setActive, type}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const cls = [
    classes.icon
  ]
  type === 'footer' && cls.push(classes.footerIcon)
  return (
    <Logotype
      className={cls.join(' ')}
      onClick={() => {
        setActive && setActive('Main Page')
        navigate('/')
      }}
    />
  );
}

export default Logo;