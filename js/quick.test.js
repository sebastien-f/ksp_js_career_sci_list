(function(){
/*

/*
tableObj.add_line(['adf',			'asdf',		'adfasdf',	'adfasdfasdf',				'aasdasdasdf','aasdasdaf'],{'row_type':'head'});//table should kurplunk
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	tableObj.reserve_merge(),	'j43523','j43523','gdj43523',tableObj.reserve_merge()],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	tableObj.reserve_merge(),	'j43523','j43523','gdj43523','j43523'],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	'gdj43523',					'j43523','j43523','gdj43523','j43523'],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	'gdj43523',					'j43523','j43523','gdj43523','j43523'],{'row_type':'head'});*/
/*
tableObj.add_line(['adf',			'asdf',		'adfasdf',	'adfasdfasdf',				'aasdasdasdf','aasdasdaf'],{'row_type':'head'});//table should kurplunk
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	tableObj.reserve_merge_col(),	'j43523','j43523','gdj43523 a',tableObj.reserve_merge_col()],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	tableObj.reserve_merge_col(),	'j43523','j43523','gdj43523 b','j43523'],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	'gdj43523',					'j43523','j43523','gdj43523','j43523'],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	'gdj43523',					'j43523','j43523','gdj43523','j43523'],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	'gdj43523',	'j43523',	'gdj43523',					'j43523','j43523','gdj43523','j43523'],{'row_type':'head'});
tableObj.add_line(['gjfdj43523',	tableObj.reserve_merge_row(),	tableObj.reserve_merge_row(),	tableObj.reserve_merge_row(),	'j43523','j43523','gdj43523','j43523'],{'row_type':'head'});
tableObj.draw_table(table_target_obj);*/
/*	console.log(
kspSciObj.parse_sci_id('recovery@KerbinFlew'),
kspSciObj.parse_sci_id('crewReport@KerbinSrfLandedLaunchPad'),
kspSciObj.parse_sci_id('crewReport@KerbinFlyingLowShores'),
kspSciObj.parse_sci_id('crewReport@KerbinSrfSplashedWater'),
kspSciObj.parse_sci_id('evaReport@KerbinInSpaceLowHighlands')
);
return;
*/

/*
//quick copy-paste unit test
var str='',allkeys='';
for(var kb in kspUniObj.body_types){
	allkeys=allkeys+kb+'|';
	str=str+"//////////"+kb+"\n";
	str=str+"if(do_test=='"+kb+"'){\n";
	str=str+"console.log('do_test',do_test);\n";
	for(var ks in kspSciObj.sciences){str=str+"\t"+"kspSciObj.get_rail_rules('"+kspSciObj.sciences[ks].ident+"','"+kb+"');\n";}
	str=str+"}\n";}
console.log('var do_test=\''+kb+'\';'+'//'+allkeys+"\n"+str);*/
//this was out putted to console to do tests
var do_test='atm_rocky';//asteroid|atm_rocky|atm_rocky_liquid|rocky|gas|star|
//////////asteroid
if(do_test=='asteroid'){
console.log('do_test',do_test);
	kspSciObj.get_rail_rules('asteroidSample','asteroid');
	kspSciObj.get_rail_rules('surfaceSample','asteroid');
	kspSciObj.get_rail_rules('evaReport','asteroid');
	kspSciObj.get_rail_rules('crewReport','asteroid');
	kspSciObj.get_rail_rules('mysteryGoo','asteroid');
	kspSciObj.get_rail_rules('mobileMaterialsLab','asteroid');
	kspSciObj.get_rail_rules('temperatureScan','asteroid');
	kspSciObj.get_rail_rules('barometerScan','asteroid');
	kspSciObj.get_rail_rules('gravityScan','asteroid');
	kspSciObj.get_rail_rules('seismicScan','asteroid');
	kspSciObj.get_rail_rules('atmosphereAnalysis','asteroid');
	kspSciObj.get_rail_rules('recovery','asteroid');
}
//////////atm_rocky
if(do_test=='atm_rocky'){
console.log('do_test',do_test);
	kspSciObj.get_rail_rules('asteroidSample','atm_rocky');
	kspSciObj.get_rail_rules('surfaceSample','atm_rocky');
	kspSciObj.get_rail_rules('evaReport','atm_rocky');
	kspSciObj.get_rail_rules('crewReport','atm_rocky');
	kspSciObj.get_rail_rules('mysteryGoo','atm_rocky');
	kspSciObj.get_rail_rules('mobileMaterialsLab','atm_rocky');
	kspSciObj.get_rail_rules('temperatureScan','atm_rocky');
	kspSciObj.get_rail_rules('barometerScan','atm_rocky');
	kspSciObj.get_rail_rules('gravityScan','atm_rocky');
	kspSciObj.get_rail_rules('seismicScan','atm_rocky');
	kspSciObj.get_rail_rules('atmosphereAnalysis','atm_rocky');
	kspSciObj.get_rail_rules('recovery','atm_rocky');
}
//////////atm_rocky_liquid
if(do_test=='atm_rocky_liquid'){
console.log('do_test',do_test);
	kspSciObj.get_rail_rules('asteroidSample','atm_rocky_liquid');
	kspSciObj.get_rail_rules('surfaceSample','atm_rocky_liquid');
	kspSciObj.get_rail_rules('evaReport','atm_rocky_liquid');
	kspSciObj.get_rail_rules('crewReport','atm_rocky_liquid');
	kspSciObj.get_rail_rules('mysteryGoo','atm_rocky_liquid');
	kspSciObj.get_rail_rules('mobileMaterialsLab','atm_rocky_liquid');
	kspSciObj.get_rail_rules('temperatureScan','atm_rocky_liquid');
	kspSciObj.get_rail_rules('barometerScan','atm_rocky_liquid');
	kspSciObj.get_rail_rules('gravityScan','atm_rocky_liquid');
	kspSciObj.get_rail_rules('seismicScan','atm_rocky_liquid');
	kspSciObj.get_rail_rules('atmosphereAnalysis','atm_rocky_liquid');
	kspSciObj.get_rail_rules('recovery','atm_rocky_liquid');
}
//////////rocky
if(do_test=='rocky'){
console.log('do_test',do_test);
	kspSciObj.get_rail_rules('asteroidSample','rocky');
	kspSciObj.get_rail_rules('surfaceSample','rocky');
	kspSciObj.get_rail_rules('evaReport','rocky');
	kspSciObj.get_rail_rules('crewReport','rocky');
	kspSciObj.get_rail_rules('mysteryGoo','rocky');
	kspSciObj.get_rail_rules('mobileMaterialsLab','rocky');
	kspSciObj.get_rail_rules('temperatureScan','rocky');
	kspSciObj.get_rail_rules('barometerScan','rocky');
	kspSciObj.get_rail_rules('gravityScan','rocky');
	kspSciObj.get_rail_rules('seismicScan','rocky');
	kspSciObj.get_rail_rules('atmosphereAnalysis','rocky');
	kspSciObj.get_rail_rules('recovery','rocky');
}
//////////gas
if(do_test=='gas'){
console.log('do_test',do_test);
	kspSciObj.get_rail_rules('asteroidSample','gas');
	kspSciObj.get_rail_rules('surfaceSample','gas');
	kspSciObj.get_rail_rules('evaReport','gas');
	kspSciObj.get_rail_rules('crewReport','gas');
	kspSciObj.get_rail_rules('mysteryGoo','gas');
	kspSciObj.get_rail_rules('mobileMaterialsLab','gas');
	kspSciObj.get_rail_rules('temperatureScan','gas');
	kspSciObj.get_rail_rules('barometerScan','gas');
	kspSciObj.get_rail_rules('gravityScan','gas');
	kspSciObj.get_rail_rules('seismicScan','gas');
	kspSciObj.get_rail_rules('atmosphereAnalysis','gas');
	kspSciObj.get_rail_rules('recovery','gas');
}
//////////star
if(do_test=='star'){
console.log('do_test',do_test);
	kspSciObj.get_rail_rules('asteroidSample','star');
	kspSciObj.get_rail_rules('surfaceSample','star');
	kspSciObj.get_rail_rules('evaReport','star');
	kspSciObj.get_rail_rules('crewReport','star');
	kspSciObj.get_rail_rules('mysteryGoo','star');
	kspSciObj.get_rail_rules('mobileMaterialsLab','star');
	kspSciObj.get_rail_rules('temperatureScan','star');
	kspSciObj.get_rail_rules('barometerScan','star');
	kspSciObj.get_rail_rules('gravityScan','star');
	kspSciObj.get_rail_rules('seismicScan','star');
	kspSciObj.get_rail_rules('atmosphereAnalysis','star');
	kspSciObj.get_rail_rules('recovery','star');
}
})();