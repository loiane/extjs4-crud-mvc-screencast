Ext.define('ExtMVC.store.Contatos',{
	extend: 'Ext.data.Store',

	model: 'ExtMVC.model.Contato',

	pageSize: 20,

	proxy: {
		type: 'ajax',
		//url: 'php/listaContatos.php',

		api:{
			create: 'php/criaContato.php',
			read: 'php/listaContatos.php',
			update: 'php/atualizaContato.php',
			destroy: 'php/deletaContato.php',
		},

		reader: {
			type: 'json',
			root: 'data'
		},

		writer: {
			type: 'json',
			root: 'data',
			encode: true
		}
	}
});