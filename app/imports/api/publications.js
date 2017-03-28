import { Meteor } from 'meteor/meteor';
import { PainelHtml } from './collections.js';

Meteor.publish('painelHtml', function() {
  return PainelHtml.find();
});
