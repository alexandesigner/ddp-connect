import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import { remote } from '../imports/startup/remote';

import { PainelHtml } from '../imports/api/collections.js';

Template.list.onCreated(function listOnCreated(){
  remote.subscribe('painelHtml');
})

Template.list.helpers({
  list: function () {
    // Perform a reactive database query against minimongo
    return PainelHtml.find({})
  }
});

Template.button.events({
    'click #save': (event, instance) => {
        event.preventDefault();
        console.log('click');
        remote.call('setTestDdp');
    }
});
