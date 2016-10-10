import validator from 'validator'

export default {
  appName: 'mercadito',
  appTitle: 'Mercadito',
  appRoute: 'mercadito',

  models: [
    {modelName: 'producto',
     title: 'Producto',
     listName: 'productos',
     listTitle: 'Productos',
     icon: 'card_giftcard',
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
		      hint: 'precio de compra',
		      icon: 'attach_money',
		      validate: [
			{func: validator.isInt,
			 message: 'Precio invalido', hint: 'precio de compra'}
		      ]
		      },
       precioVenta: {uiType: 'number', defaultValue: '', label: 'Precio de Venta',
		     icon: 'attach_money', 
		     validate: [
		       {func: validator.isInt,
			message: 'El precio debe ser un numero entero'}
		     ]
		    }
     }
    },
    {modelName: 'productor',
     title: 'Productor',
     listName: 'productores',
     listTitle: 'Productores',
     icon: 'person',
     fields: {
       nombre: {
	 uiType: 'String', hint: 'Nombre del Productor', icon: 'person',
	 label: 'Nombre',
	 validate: [{func: validator.isLength,
		     params: {min: 2},
		     message: 'Nombre muy corto'}
		   ]
       }
     }
    },
    {modelName: 'cliente',
     title: 'Cliente',
     listName: 'clientes',
     listTitle: 'Clientes',
     icon: 'person',
     fields: {
       nombre: {
	 uiType: 'String', hint: 'Nombre del Cliente',
	 label: 'Nombre', icon: 'person',
	 validate: [{func: validator.isLength,
		     params: {min: 2},
		     message: 'Nombre muy corto'}
		   ]
       },
       telefono: {uiType: 'string', hint: 'Numero de telefono', icon: 'phone'},
       email: {uiType: 'email', hint: 'Direccion de email', icon: 'email'},
       direccion: {uiType: 'string', hint: 'Direccion', icon: 'location_on'}
     }
    },
    {modelName: 'distribuidor',
     title: 'Distribuidor',
     listName: 'distribuidores',
     listTitle: 'Distribuidores',
     icon: 'home',
     fields: {
       nombre: {
	 uiType: 'String', hint: 'Nombre del Distribuidor', icon: 'home',
	 validate: [{func: validator.isLength,
		     params: {min: 2},
		     message: 'Nombre muy corto'}
		   ]
       }
     }
    },
    {modelName: 'categoria',
     title: 'Categoria',
     listName: 'cetegorias',
     listTitle: 'Categorias',
     icon: 'home',
      fields: {
	nombre: {
	  uiType: 'string', hint: 'Nombre del Distribuidor', icon: 'home',
	  validate: [{func: validator.isLength,
		      params: {min: 2},
		      message: 'Nombre muy corto'}
		    ]
	}
      }
    },
    {modelName: 'pedido',
     title: 'pedido',
     listName: 'pedidos',
     listTitle: 'Pedidos',
     icon: 'list',
     fields: {
       cliente: {type: 'manyToOne', model: 'cliente', remoteField: 'pedidos'},
       items: {type: 'oneToMany', model: 'pedidoItem', remoteField: 'pedido'}
     }
    },
    {modelName: 'pedidoItem',
     title: 'pedidoItem',
     listName: 'pedidoItems',
     listTitle: 'Pedido Items',
     icon: 'list',
     fields: {
       cliente: {uiType: 'string', icon: 'person'},
       producto: {uiType: 'string', icon: 'spa'},
       cantidad: {uiType: 'number', icon: 'assesment'},
       precioCompra: {uiType: 'number', icon: 'assesment'},
       precioVenta: {uiType: 'number', icon: 'assesment'},
       totalCompra: {uiType: 'number', icon: 'assesment'},
       totalVenta: {uiType: 'number', icon: 'assesment'},
       productor: {uiType: 'number', icon: 'assesment'},
       presentacion: {uiType: 'string', icon: 'assesment'}
     }
    }
  ]
}
