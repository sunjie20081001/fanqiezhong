$(function(){
	//运行app
	var state = "stop";
	var step  = 60;  //时间步长
	var time  = step * 45;   //秒计算,时长
	var lefttime = time;
	var timeIn = null;
	var notice = new Notice();

	function render(){
		var m = parseInt(lefttime/step);
		var s = lefttime - m*step;
		if(m < 10){
			m = "0"+m;
		}
		if(s < 10){
			s = "0"+s;
		}
		$('.j-time').html(m+":"+s);	
	}
	
	render();
	
	
	function run(){
		if(state == 'stop'){
			state = 'run';
			timeIn = setInterval(function(){
			if(lefttime == 0){
				state = "stop";
				clearInterval(timeIn);
				notice.create();
			}else{
				lefttime--;
				render();
			}
		},1000);
		}
	}
	function stop(){
		
		if(timeIn){
		clearInterval(timeIn);
		state = 'stop';
		}
	}
	
	function reset(){
		if(timeIn){
			stop();
		}
		lefttime =time;
		render();
	}
	
	$('.j-add').click(function(){
		//增加时长
		if(state == "stop"){
			time += step;
			lefttime = time;
			render();
			console.log();
		}
	});
	
	$('.j-minus').click(function(){
		if(state == 'stop' && time > 0){
			time -= step;
			if(time < 0){
				time = 0;
			}
			lefttime = time;
			render();
		}
	});
	
	
	
	$('.j-start').click(function(){
		run();
	});
	
	$('.j-stop').click(function(){
		stop();
	});
	
	$('.j-reset').click(function(){
		reset();
	});
	
	
	
})