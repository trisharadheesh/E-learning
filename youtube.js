var apiKey='{AIzaSyBan83i90im1GipTZElETx1EbmpedPLJaw}';
var channelId='UCCn5UDdHHT-3De2eLQM8lxA'; //channel id
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '330',
		width: '800',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}
$(document).ready(function(){

	$.get(
		"https://www.googleapis.com/youtube/v3/channels", {
			part:'contentDetails',
			id:"UCCn5UDdHHT-3De2eLQM8lxA",
			key:"AIzaSyBan83i90im1GipTZElETx1EbmpedPLJaw" },
			function(data) {
				$.each(data.items, function(i,item){
					pid=item.contentDetails.relatedPlaylists.uploads;
					fetchVideo(pid);
				});
			}
	);
	function fetchVideo(pid) {
		$.get(
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				part:'snippet',
				maxResults:50,
				playlistId:'PLwQB20pcv87YBOaYFJF08opwsO4l63-4R',
				key:'AIzaSyBan83i90im1GipTZElETx1EbmpedPLJaw' },
				function(data) {
					$.each(data.items, function(i,item){
						var vid_title=item.snippet.title;
						var vid_thumb=item.snippet.thumbnails.medium.url;
						var vid_id=item.snippet.resourceId.videoId;
						var vid_container=$('#videos');
						var videoEle='<div class=" vidEle" data-id="'+vid_id+'">'+
								        '<a href="#top">'+
								          
								          '<div class="v-title">'+vid_title+'</div>'+
								        //'</a>'+
								      '</div>'
						//vid_container.append(videoEle);
						list-container.target.loadVideoById(playlistId[currentVideoId]);
						function onPlayerStateChange(event) {
							if (event.data == YT.PlayerState.ENDED) {
								currentVideoId++;
								if (currentVideoId < playlistId.length) {
									player.loadVideoById(playlistId[currentVideoId]);
								}
							}
						}
						//$("#videoEle").click(function() {
						//vid_container.append( videoEle[++currentIndex]);
					   //});
					});
				}
		);
	}

 	$(document).on('click','.list-container',function(){
 		$('#yt-player').attr('src','https://www.youtube.com/embed/'+$(this).data('id')+'?autoplay=1');
 		
 	});
});
