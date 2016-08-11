export default {
  appName: 'menu',
  appTitle: 'Menu',
  appRoute: 'menu',

  components: [
    {componentName: 'menuItem',
     title: 'MenuItem',
     listName: 'menues',
     listTitle: 'Menu',
     fields: {
       nombre: {uiType: 'string', defaultValue: ''}
     }
    }
  ]
}
