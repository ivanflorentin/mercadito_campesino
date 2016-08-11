import validator from 'validator'

export default {
  appName: 'mercadito',
  appTitle: 'Mercadito',
  appRoute: 'mercadito',

  components: [
    {componentName: 'producto',
     title: 'Producto',
     listName: 'productos',
     listTitle: 'Productos',
     fields: {
       nombre: {uiType: 'string', defaultValue: '',
		validate: [{func: validator.isLength,
			    params: {min: 2},
			    message: 'Nombre muy corto', hint: 'Nombre del Producto'}],
		label: 'Nombre', icon: 'chat'
	       },
       presentacion: {uiType: 'string', defaultValue: '',
		      label: 'Presentacion', icon: 'assignment'},
       precioCompra: {uiType: 'number', defaultValue: '',
		      label: 'Precio de Compra',
		      icon: 'attach_money',
		      validate: [
			{func: validator.isInt,
			 message: 'Precio invalido', hint: 'precio de compra'}
		      ]
		      },
       precioVenta: {uiType: 'number', defaultValue: '', label: 'Precio de Venta',
		     icon: 'attach_money', hint: 'precio de compra',
		     validate: [
		       {func: validator.isInt,
			message: 'El precio debe ser un numero entero'}
		     ]
		    }
     }
    },
    {componentName: 'productor',
     title: 'Productor',
     listName: 'productores',
     listTitle: 'Productores',
     fields: {
       nombre: {
	 uiType: 'String', hint: 'Nombre del Productor', icon: 'person',
	 validate: [{func: validator.isLength,
		     params: {min: 2},
		     message: 'Nombre muy corto'},
		    {func: validator.isAlpha,
		     params: {min: 2},
		     message: 'El nonbre solo puede contener letras'}
		   ]
       }
     }
    },
    {componentName: 'cliente',
     title: 'Cliente',
     listName: 'clientes',
     listTitle: 'Clientes',
     fields: {
       nombre: {
	 uiType: 'String', hint: 'Nombre del Cliente',
	 validate: [{func: validator.isLength,
		     params: {min: 2},
		     message: 'Nombre muy corto'},
		    {func: validator.isAlpha,
		     params: {min: 2},
		     message: 'El nonbre solo puede contener letras'}
		   ]
       },
       telefono: {uiType: 'string', hint: 'Numero de telefono', icon: 'phone'},
       email: {uiType: 'email', hint: 'Direccion de email', icon: 'email',
	       validate: [
		 {func: validator.isEmail,
		  message: 'Direccion de email invalida'
		 }
	       ]},
       direccion: {uiType: 'string', hint: 'Direccion', icon: 'location_on'},
     }
    },
    {componentName: 'distribuidor',
     title: 'Distribuidor',
     listName: 'distribuidores',
     listTitle: 'Distribuidores',
     icon: 'home',
     fields: {
       nombre: {
	 uiType: 'String', hint: 'Nombre del Distribuidor', icon: 'home',
	 validate: [{func: validator.isLength,
		     params: {min: 2},
		     message: 'Nombre muy corto'},
		    {func: validator.isAlpha,
		     params: {min: 2},
		     message: 'El nonbre solo puede contener letras'}
		   ]
       }
     }
    },
    {componentName: 'categoria',
     title: 'Categoria',
     listName: 'cetegorias',
     listTitle: 'Categorias',
      icon: 'home',
      fields: {
	nombre: {
	  uiType: 'String', hint: 'Nombre del Distribuidor', icon: 'home',
	  validate: [{func: validator.isLength,
		      params: {min: 2},
		      message: 'Nombre muy corto'},
		     {func: validator.isAlpha,
		      params: {min: 2},
		      message: 'El nonbre solo puede contener letras'}
		    ]
	}
      }
    }
  ]
}
