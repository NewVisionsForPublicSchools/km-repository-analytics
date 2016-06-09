var REPOSS = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('repositoryId'));



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
	var myOtherSplitUrl = this.url.split('id=');
	var myScriptUrl = this.url.split('/s/');
	this.googleId = mySplitUrl.length > 1 ? mySplitUrl[1].split('/')[0] : myOtherSplitUrl.length > 1 ? myOtherSplitUrl[1] : myScriptUrl.length > 1 ? myScriptUrl[1].split('/')[0] : '' ;
	return this.googleId;
};



Asset.prototype.getCreationDate = function() {
	this.creationDate = 'Hello World';
	return this.creationDate;
};