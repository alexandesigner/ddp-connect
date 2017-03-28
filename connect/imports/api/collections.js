import { Mongo } from 'meteor/mongo';

import { remote } from '../startup/remote.js';

export const PainelHtml = new Mongo.Collection('painelHtml', remote);
