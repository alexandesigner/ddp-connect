import '../../api/collections.js';
import '../../api/methods.js';
import '../../api/publications.js';

Meteor.startup(()=>{
    // PERMISSIONS
    for(var i in collections){
            collections[i].allow({
                    insert: (userId, form) => false,
                    update: (userId, form, fields, modifier) => false,
                    remove: (userId, form) => false
            });
    }

    // PUBLICATIONS
    //Meteor.publish('painelHtml', () => PainelHtml.find({}));    	
    //Meteor.publish('infografico_jrxml', () => InfograficoJrxml.find({}));

});