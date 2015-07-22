/* global jQuery */
(function(window, $){
	
	function Notice(){
		console.log("初始化notice");
	}
	
	Notice.prototype.create = function(){
		chrome.notifications.create('notice', {
			'type':'image',
			'iconUrl':'../img/logo-48.png',
			'title': '时间到！',
			'message': '时间到了，休息一下，喝杯茶',
			'imageUrl':'../img/notice.jpg'
		});
	}
	
	window.Notice = Notice;
	
})(window, jQuery);