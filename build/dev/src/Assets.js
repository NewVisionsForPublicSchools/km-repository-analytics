// var REPOSS = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('repositoryId'));



function Asset(assetInfo){
	this.repoId = assetInfo.id;
	this.title = assetInfo.title;
	this.url = assetInfo.url;
	this.submittedBy = assetInfo.submittedBy;
	this.dateSubmitted = assetInfo.dateSubmitted;
	return this;
}



Asset.prototype.getGoogleId = function() {
	var mySplitUrl = this.url.split('/d/');
	this.GoogleId = mySplitUrl.length > 1 ? mySplitUrl[1].split('/')[0] : '';
	return this.GoogleId;
};



Asset.prototype.getCreationDate = function() {
	// body...
};