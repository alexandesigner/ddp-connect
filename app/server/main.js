import '/imports/startup/server';

Meteor.methods({
    setTestDdp1: () => PainelHtml.insert({ teste: 1, dado: 'one' }),
    setTestDdp2: () => PainelHtml.insert({ teste: 2, dado: 'two' })
});