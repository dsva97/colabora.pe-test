import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

import classes from './style.module.css'

export const Layout = ({children}) => {
  return (
    <div className={classes.container}>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
