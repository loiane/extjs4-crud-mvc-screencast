Ext.define('ExtMVC.view.ContatosForm',{
	extend: 'Ext.window.Window',
	alias: 'widget.contatosform',

	height: 200,
	width: 350,
	layout: 'fit',
	iconCls: 'icon-user',
	title: 'Editar/Criar Contato',
	autoShow: true,

	items: [
		{
			xtype: 'form',
			bodyPadding: 10,
			defaults: {
				anchor: '100%'
			},
			items: [
				{
					xtype: 'hiddenfield',
			        name: 'id'
				},
				{
					xtype: 'textfield',
			        name: 'name',
			        fieldLabel: 'Nome'
				},
				{
					xtype: 'textfield',
			        name: 'email',
			        fieldLabel: 'Email'
				},
				{
					xtype: 'textfield',
			        name: 'phone',
			        fieldLabel: 'Telefone'
				}
			]
		}
	],
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			layout: {
				type: 'hbox',
				pack: 'end'
			},
			items: [
				{
					xtype: 'button',
					text: 'Cancelar',
					itemId: 'cancel',
					iconCls: 'icon-reset'
				},
				{
					xtype: 'button',
					text: 'Salvar',
					itemId: 'save',
					iconCls: 'icon-save'
				}
			]
		}
	]
});