"use strict"

import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Button from 'react-toolbox/lib/button'

import style from './style'

const MainAppBar = () => (
  <AppBar className={style.appbar} flat>
    <h1 className={style.title}>Mercadito Campesino</h1>
  </AppBar>
)

export default MainAppBar


