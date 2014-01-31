Ext.define('ExtMVC.model.Contato',{
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id',  type: 'int'},
		{name: 'email',  type: 'string'},
		{name: 'name',  type: 'string'},
		{name: 'phone',  type: 'string'}
	]
});