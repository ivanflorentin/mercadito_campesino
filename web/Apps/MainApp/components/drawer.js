import React, {Component} from 'react'
import Drawer from 'react-toolbox/lib/drawer'
import Button from 'react-toolbox/lib/button'
import Navigation from 'react-toolbox/lib/navigation'

class MainDrawer extends Component {

  constructor(props, context) {
    super(props, context);

    this.pushRoute = props.pushRoute
    this.handleRoute = this.handleRoute.bind(this);
    this.actions = [
      {name: 'home', label: 'Inicio', raised: true, accent: true, icon: 'home',
       onClick: this.handleRoute},
      {name: 'mercadito', label: 'Mercadito', raised: true, icon: 'shopping_cart',
       onClick: this.handleRoute}
    ]
    this.state = {active: false}
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({active: !this.state.active})
  }
  handleRoute(options) {
    this.handleToggle()
    switch (options.target.name) {
    case 'home': {
      this.pushRoute('/')
      break
    }
    case 'mercadito': {
      this.pushRoute('/mercadito')
      break
    }
    default: return
    }
  }
  render() {
  return <div>
	<Button icon='menu' raised accent onClick={this.handleToggle} />
	<Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
	<Navigation type='horizontal' actions={this.actions} />
	</Drawer>
      </div>
      }
}

MainDrawer.propTypes = {
    pushRoute: React.PropTypes.func.isRequired
}

export default MainDrawer
