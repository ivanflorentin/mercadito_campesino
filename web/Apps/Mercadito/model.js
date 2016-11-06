import validator from 'validator'
import localforage from 'redux-replicate-localforage'

export default {
  appName: 'mercadito',
  appTitle: 'Mercadito',
  appRoute: 'mercadito',

  models: [
    {
      modelName: 'producto',
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
			 {
			   func: validator.isInt,
			   message: 'Precio invalido', hint: 'precio de compra'}
		       ]
		      },
	precioVenta: {uiType: 'number', defaultValue: '', label: 'Precio de Venta',
		      icon: 'attach_money', 
		      validate: [
			{
			  func: validator.isInt,
			  message: 'El precio debe ser un numero entero'}
		      ]
		     }
      },
      replication: {
        key: 'producto',
        reducerKeys: true,
        create: true,
        queryable: true,
        replicator: localforage
      }
    },
    {
      modelName: 'productor',
      title: 'Productor',
      listName: 'productores',
      listTitle: 'Productores',
      icon: 'person',
      fields: {
	nombre: {
	  uiType: 'String', hint: 'Nombre del Productor', icon: 'person',
	  label: 'Nombre',
	  validate: [
	    {func: validator.isLength,
	     params: {min: 2},
	     message: 'Nombre muy corto'}
	  ]
	}
      },
      replication: {
        key: 'productor',
        reducerKeys: true,
        create: true,
        queryable: true,
        replicator: localforage
      }

    },
    {
      modelName: 'cliente',
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
      },
      replication: {
        key: 'cliente',
        reducerKeys: true,
        create: true,
        queryable: true,
        replicator: localforage
      }
    },
    {
      modelName: 'distribuidor',
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
     },
      replication: {
        key: 'distribuidor',
        reducerKeys: true,
        create: true,
        queryable: true,
        replicator: localforage
      }
    },
    {
      modelName: 'categoria',
      title: 'Categoria',
      listName: 'cetegorias',
      listTitle: 'Categorias',
      icon: 'home',
      fields: {
	nombre: {
	  uiType: 'string', hint: 'Nombre del Distribuidor', icon: 'home',
	  validate: [
	    {func: validator.isLength,
	     params: {min: 2},
	     message: 'Nombre muy corto'}
	  ]
	}
      },
      replication: {
        key: 'categoria',
        reducerKeys: true,
        create: true,
        queryable: true,
        replicator: localforage
      }      
    },
    {
      modelName: 'pedido',
      title: 'pedido',
      listName: 'pedidos',
     listTitle: 'Pedidos',
      icon: 'list',
      fields: {
	fecha: {uiType: 'string', icon: 'date_range'},
	cliente: {relation: 'cliente', icon: 'person', remoteField: 'pedidos'},
	items: {relation: 'pedidoItem', remoteField: 'pedido'}
      },
      replication: {
        key: 'pedido',
        reducerKeys: true,
        create: true,
        queryable: true,
        replicator: localforage
      }
    },
    {
      modelName: 'pedidoItem',
      title: 'pedidoItem',
      listName: 'pedidoItems',
      listTitle: 'Pedido Items',
      icon: 'list',
      fields: {
	cliente: {uiType: 'string', icon: 'person', label: 'Cliente', defaultValue: ''},
	producto: {uiType: 'string', icon: 'spa', label: 'Producto', defaultValue: ''},
	cantidad: {uiType: 'number', icon: 'shopping_cart', label: 'Cantidad', defaultValue: 1},
	precioCompra: {uiType: 'number', icon: 'monetization_on', label: 'Precio Compra',
		       defaultValue: 0},
	precioVenta: {uiType: 'number', icon: 'monetization_on', label: 'Precio Venta',
		      defaultValue: 0},
	totalCompra: {uiType: 'number', icon: 'monetization_on', label: 'Total Compra'
		      , defaultValue: 1},
	totalVenta: {uiType: 'number', icon: 'monetization_on', label: 'Total Venta',
		     defaultValue: 1},
	productor: {uiType: 'number', icon: 'person', label: 'Productor', defaultValue: 1},
	presentacion: {uiType: 'string', icon: 'card_giftcard', label: 'Presentacion',
		       defaultValue: ''}
      },
      replication: {
        key: 'pedidoItem',
        reducerKeys: true,
        create: true,
        queryable: true,
        replicator: localforage
      }
    }
  ]
}
