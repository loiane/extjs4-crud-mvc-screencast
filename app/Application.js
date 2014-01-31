Ext.define('ExtMVC.Application', {
    name: 'ExtMVC',

    extend: 'Ext.app.Application',

    requires: [
    	'Ext.toolbar.Paging',
        'Ext.form.Panel'
    ],

    views: [
        
    ],

    controllers: [
        'Main'
    ],

    stores: [
        
    ]
});
