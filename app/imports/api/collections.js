//var database = new MongoInternals.RemoteCollectionDriver("mongodb://10.1.1.17:27017/local");
//var mycollection = new Mongo.Collection('cbo', { _driver: database });
//
//mycollection.find({codigo: "411000"}).map((c) => {
//  console.log(c);
// return c;
//});


import { Mongo } from 'meteor/mongo';

// agendamento
C201601 = new Mongo.Collection('c201601');
C201602 = new Mongo.Collection('c201602');
C201603 = new Mongo.Collection('c201603');
C201604 = new Mongo.Collection('c201604');
C201605 = new Mongo.Collection('c201605');
C201606 = new Mongo.Collection('c201606');
C201607 = new Mongo.Collection('c201607');
C201608 = new Mongo.Collection('c201608');
C201609 = new Mongo.Collection('c201609');
C201610 = new Mongo.Collection('c201610');
C201611 = new Mongo.Collection('c201611');
C201612 = new Mongo.Collection('c201612');
C201701 = new Mongo.Collection('c201701');

// internacao
AIH201601 = new Mongo.Collection('aih201601');
AIH201602 = new Mongo.Collection('aih201602');
AIH201603 = new Mongo.Collection('aih201603');
AIH201604 = new Mongo.Collection('aih201604');
AIH201605 = new Mongo.Collection('aih201605');
AIH201606 = new Mongo.Collection('aih201606');
AIH201607 = new Mongo.Collection('aih201607');
AIH201608 = new Mongo.Collection('aih201608');
AIH201609 = new Mongo.Collection('aih201609');
AIH201610 = new Mongo.Collection('aih201610');
AIH201611 = new Mongo.Collection('aih201611');
AIH201612 = new Mongo.Collection('aih201612');

Estabelecimento = new Mongo.Collection('estabelecimento');
Municipio = new Mongo.Collection('municipio');
Cbo = new Mongo.Collection('cbo');
Profissional = new Mongo.Collection('profissional');

PainelHtml = new Mongo.Collection('painelHtml');
InfograficoJrxml = new Mongo.Collection('infografico_jrxml');

collectionsName = {
        // agendamento
	C201601: 'c201601',
        C201602: 'c201602',
        C201603: 'c201603',
        C201604: 'c201604',
        C201605: 'c201605',
        C201606: 'c201606',
        C201607: 'c201607',
	C201608: 'c201608',
    	C201609: 'c201609',
	C201610: 'c201610',
        C201611: 'c201611',
        C201612: 'c201612',
	C201701: 'c201701',
        
        // internacao
        AIH201601: 'aih201601',
        AIH201602: 'aih201602',
        AIH201603: 'aih201603',
        AIH201604: 'aih201604',
        AIH201605: 'aih201605',
        AIH201606: 'aih201606',
        AIH201607: 'aih201607',
	AIH201608: 'aih201608',
    	AIH201609: 'aih201609',
	AIH201610: 'aih201610',
        AIH201611: 'aih201611',
        AIH201612: 'aih201612',
        
	Estabelecimento: 'estabelecimento',
	Municipio: 'municipio',
	Cbo: 'cbo',
	Profissional: 'profissional',
        
	PainelHtml: 'painelHtml',
    	InfograficoJrxml: 'infografico_jrxml'
};

collections = {
	// agendamento
	C201601: C201601,
        C201602: C201602,
        C201603: C201603,
	C201604: C201604,
        C201605: C201605,
        C201606: C201606,
        C201607: C201607,
	C201608: C201608,
    	C201609: C201609,
	C201610: C201610,
        C201611: C201611,
        C201612: C201612,
	C201701: C201701,
        
        // internacao
        AIH201601: AIH201601,
        AIH201602: AIH201602,
        AIH201603: AIH201603,
	AIH201604: AIH201604,
        AIH201605: AIH201605,
        AIH201606: AIH201606,
        AIH201607: AIH201607,
	AIH201608: AIH201608,
    	AIH201609: AIH201609,
	AIH201610: AIH201610,
        AIH201611: AIH201611,
        AIH201612: AIH201612,
        
	Estabelecimento: Estabelecimento,
	Municipio: Municipio,
	Cbo: Cbo,
	Profissional: Profissional,
        
	PainelHtml: PainelHtml,
    	InfograficoJrxml: InfograficoJrxml
};
