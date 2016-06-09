var REPOSS = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('repositoryId'));



function assetTest(){
	var test, records, myAssets;

	records = NVSL.getRowsData(REPOSS.getSheetByName('Publication Directory'));
	myAssets = records.map(function(e){
		return new Asset(e);
	});
	debugger;
}



function getGoogleIdTest(){
	var test, records, myAssets, myGoogleIds, driveAssets, otherAssets;

	records = NVSL.getRowsData(REPOSS.getSheetByName('Publication Directory'));
	myAssets = records.map(function(e){
		return new Asset(e);
	});
	myGoogleIds = myAssets.map(function(e){
		return e.getGoogleId();
	});
	driveAssets = myAssets.filter(function(e){
		return e.googleId;
	}).map(function(e){
		return e.googleId;
	});
	otherAssets = myAssets.filter(function(e){
		return !e.googleId;
	}).map(function(e){
		return e.url;
	});
	debugger;
}



function getCreationDateTest(){
	var test, records, myAssets, myCreatedAssets;

	records = NVSL.getRowsData(REPOSS.getSheetByName('Publication Directory'));
	myAssets = records.map(function(e){
		return new Asset(e);
	});
	myCreatedAssets = myAssets.map(function(e){
		return e.getCreationDate();
	});

	debugger;
}