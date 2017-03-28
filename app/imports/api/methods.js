import { Meteor } from 'meteor/meteor';

import { PainelHtml } from './collections.js';

Meteor.methods({
    setTestDdp: () => PainelHtml.insert({ teste: 1 })
});
