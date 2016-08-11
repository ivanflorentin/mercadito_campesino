import React, {Component, PropTypes} from 'react'
import Header from './header'
import MainDrawer from './drawer'
import style from './style'

class MainContainer extends Component {
  render() {
    return <div>
      <Header>
        <div> agregar contenido aqui</div>
      </Header>
      <MainDrawer />
      <section className={style.content}>
        {this.props.children}
      </section>
	   </div>
  }
}


MainContainer.propTypes = {
  children: PropTypes.object
}

export {MainContainer}
