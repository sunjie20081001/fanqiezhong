/* global chrome */
chrome.app.runtime.onLaunched.addListenner(function(){
	chrome.app.window.create('window.html',{
		
	});
});