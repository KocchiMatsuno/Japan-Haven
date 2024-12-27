window.onload=function(){
	//get vid
	var video = document.getElementById("myVideo");
	//get buttons
	var playBtn=document.getElementById("playBtn");
	var pauseBtn=document.getElementById("pauseBtn");
	var seekBar=document.getElementById("seekBar");
	var volumeControl=document.getElementById("volume");
	var muteBtn=document.getElementById("muteBtn");
	
	//add event listener for play button
	playBtn.addEventListener("click",function(e){
			video.play();
	});
	
	//add event listener to pause button
	pauseBtn.addEventListener("click",function(e){
			video.pause();
	});
	
	//add event listener to seek bar button
	seekBar.addEventListener ("change",function(e){
		var time = video.duration*(seekBar.value/100);
		video.currentTime = time;
			
	});
	//update the seekbar as the video plays
	video.addEventListener("timeupdate",function(e){
		var value=(100/video.duration)*video.currentTime;
			seekBar.value=value;
	});
		
	//pause playback when user starts seeking
	seekBar.addEventListener("mousedown",function(e){
			video.pause();
	});
		
	//continue playback when user stops seeking
	seekBar.addEventListener("mousedown",function(e){
		video.play;
	});
		
	//add event listener to volume control
	volumeControl.addEventListener("change",function(e){
		video.volume=volumeControl.value;
	});
		
	//add event listener to mute button
	muteBtn.addEventListener("click",function(e){
		if(video.muted==true){
			video.muted = false;
			muteBtn.textContent = "Mute"
		}
		else{
			video.muted=true;
			muteBtn.textContent= "Unmute";
		}
	});
}
