import { Meteor } from 'meteor/meteor';
import { DPP } from 'meteor/ddp-client';

export const remote = DDP.connect('http://localhost:20000');
