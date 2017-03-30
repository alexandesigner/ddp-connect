import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { remote } from '../imports/startup/remote';
import { PainelHtml } from '../imports/api/collections.js';

// LIST 1
Template.list1.onCreated(function list1OnCreated(){
  remote.subscribe('painelHtml');
  console.log(PainelHtml.find({}));
});

Template.list1.helpers({
  list1: function () {
    // Perform a reactive database query against minimongo
    return PainelHtml.find({})
  }
});

Template.list1.events({
    'click #save1': (event, instance) => {
        event.preventDefault();
        console.log('click 1');
        remote.call('setTestDdp1');
    }
});

// LIST 2
Template.list2.onCreated(function list2OnCreated(){
  remote.subscribe('painelHtml');
});

Template.list2.helpers({
  list2: function () {
    // Perform a reactive database query against minimongo
    return PainelHtml.find({teste:2})
  }
});

Template.list2.events({
    'click #save2': (event, instance) => {
        event.preventDefault();
        console.log('click 2');
        remote.call('setTestDdp2');
    }
});
