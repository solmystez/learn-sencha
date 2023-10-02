/**
 * This view is an example list of people.
 */
Ext.define('backoffice.view.main.List', {
    extend: ' ',
    xtype: 'mainlist',

    requires: [
        'backoffice.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
