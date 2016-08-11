import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'

import style from './style'

const MainAppBar = () =>
  <AppBar className={style.appbar} flat>
    <h3 className={style.title}>Mercadito Campesino</h3>
  </AppBar>

export default MainAppBar;

