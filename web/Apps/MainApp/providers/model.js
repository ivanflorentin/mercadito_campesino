export default {
  appName: 'menu',
  appTitle: 'Menu',
  appRoute: 'menu',

  models: [
    {modelName: 'menuItem',
     title: 'MenuItem',
     listName: 'menues',
     listTitle: 'Menu',
     fields: {
       nombre: {uiType: 'string', defaultValue: ''}
     }
    }
  ]
}
