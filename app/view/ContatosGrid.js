Ext.define('ExtMVC.view.ContatosGrid',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.contatosgrid',

	store: 'ExtMVC.store.Contatos',

	title: 'Contatos',

	iconCls: 'icon-grid',

	columns: [
		{
			text: 'ID',
			width: 35,
			dataIndex: 'id'
		},
		{
			text: 'Nome',
			width: 170,
			flex: 1,
			dataIndex: 'name'
		},
		{
			text: 'Telefone',
			width: 100,
			dataIndex: 'phone'
		},
		{
			text: 'Email',
			width: 170,
			dataIndex: 'email'
		}
	],

	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					text: 'Novo',
					itemId: 'add',
					iconCls: 'icon-add'
				},
				{
					xtype: 'button',
					text: 'Excluir',
					itemId: 'delete',
					iconCls: 'icon-delete'
				}
			]
		},
		{
			xtype: 'pagingtoolbar',
	        store: 'ExtMVC.store.Contatos',
	        dock: 'top',
	        displayInfo: true,
	        emptyMsg: 'Nenhum contato encontrado'
		}
	]

});















