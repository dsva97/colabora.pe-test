import React from 'react'
import { Menu } from './Menu'
import { Link } from 'react-router-dom'

import classes from './style.module.css'

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">Colabora.pe</Link>
      <Menu />
    </header>
  )
}
