Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'ExtMVC.view.ContatosGrid'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'contatosgrid'
    }]
});
