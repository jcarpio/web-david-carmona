var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var elementAudio = document.createElement( 'audio' );
elementAudio.src =  IRON.state.theme_url + '/js/assets/default.wav';

var elementAudioSingle = document.createElement( 'audio' );
elementAudioSingle.src =  IRON.state.theme_url + '/js/assets/default.wav';

IRON.audioPlayer = function($){

	function initPlayer( player ){
		var audioPlayer = player;
		this.audioPlayer = player;
		var waveContainer = this.audioPlayer.find('.player .wave').attr('id');
		var playlist = audioPlayer.find('.playlist');
		this.playlist = playlist;


		var wavesurfer = WaveSurfer.create({
			container: '#' + waveContainer,
			cursorWidth: 0,
			barWidth: 1,
			progressColor: iron_vars.croma_music.color_progress,
			waveColor: iron_vars.croma_music.color_base,
			height: 70,
			backend: 'MediaElement',
			mediaControls: false,
		});

		wavesurfer.on('loading', function(){
				var progressLoad = arguments[0]
				audioPlayer.find('.progressLoading').css('background', iron_vars.croma_music.color_base );
				audioPlayer.find('.progressLoading').css('width', 'calc( ' + progressLoad + '% - 200px )' )
				if (progressLoad == 100) {
					audioPlayer.find('.player').addClass('reveal')
					audioPlayer.find('.progressLoading').css('opacity', '0' )
				}
			})

		this.wavesurfer = wavesurfer;

		setPlaylist( playlist , wavesurfer, audioPlayer );
		setCurrentTrack( playlist.find('li').eq(0), playlist.find('li').index(), audioPlayer, wavesurfer );
		setControl( wavesurfer, audioPlayer, playlist );
		setNextSong( wavesurfer, audioPlayer, playlist );

		if( audioPlayer.data('autoplay') ){

			if (IRON.state.enable_ajax) {
				$.when( IRON.continuousPlayer.ready ).done(function(){
					play( audioPlayer, wavesurfer );
				})
			}else{
				wavesurfer.on('ready', function(){
					play( audioPlayer, wavesurfer );
				})
			}
		}
	}

	var setNextSong = function( wavesurfer, audioPlayer, playlist ){
		wavesurfer.on('finish', function(){
			next(audioPlayer, playlist)
		})
	}

	function setCurrentTrack( track, index, audioPlayer, wavesurfer ){
		var albumArt = audioPlayer.find('.album .album-art');
		var trackTitle = audioPlayer.find('.track-title');
		var albumTitle = audioPlayer.find('.album-title');

		if ( albumArt.find('img').length ) {
			albumArt.find('img').attr('src', track.data('albumart'));
		}else{
			albumArt.css('background-image', 'url(' + track.data('albumart') + ')');
		}

		if( !audioPlayer.hasClass('show-playlist') ){
			albumArt.one('click', function(){
				setContinuousPlayer( index , audioPlayer);
			})
			albumArt.css('cursor','pointer')
		}
			audioPlayer.data('currentTrack', index);

		if ( !IRON.state.enable_ajax ) {
			trackTitle.text(track.data('tracktitle'));
			albumTitle.text(track.data('albumtitle'));

			audioPlayer.find('.player').removeClass('hide')

			if ( !track.data('showloading') ) {
				audioPlayer.find('.player').addClass('hide')
			}else{
				audioPlayer.find('.progressLoading').css('opacity', '0.75' )
			}

			setAudio(track.data('audiopath'), wavesurfer);
			setTime( audioPlayer, wavesurfer );
		}



	}

	function setPlaylist( playlist , wavesurfer, audioPlayer ){
		playlist.find('li').each(function(){
			setSingleTrack( $(this), $(this).index(), wavesurfer, audioPlayer );
		})
	}

	function setTime( audioPlayer, wavesurfer ){
		wavesurfer.on('ready', function(){
			var totalTime = moment.duration(wavesurfer.getDuration(), 'seconds' );
			audioPlayer.find('.totalTime').html( moment( totalTime.minutes()+':'+totalTime.seconds(), 'm:s' ).format( 'mm:ss' ) );
			wavesurfer.on('audioprocess', function(){
				var time = moment.duration(wavesurfer.getCurrentTime(), 'seconds' );
				audioPlayer.find('.currentTime').html( moment( time.minutes()+':'+time.seconds(), 'm:s' ).format( 'mm:ss' ) );
			})
		})
	}

	function setControl( wavesurfer, audioPlayer, playlist ){
		var ctrl = audioPlayer.find('.control');
		if ( IRON.state.enable_ajax ){

			audioPlayer.find('.wave').remove()
			// return
		}

		ctrl.on('click', '.play', function(){
			play( audioPlayer, wavesurfer )
		})
		ctrl.on('click', '.previous', function(){
			previous( audioPlayer, wavesurfer, playlist )
		})
		ctrl.on('click', '.next', function(){
			next( audioPlayer, playlist )
		})

	}

	function setSingleTrack( singleTrack , eq, wavesurfer, audioPlayer ){
		var tracknumber = eq + 1;
		var trackplay = $('<span/>',{
			class: 'track-number',
			html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.5 21.2" style="enable-background:new 0 0 17.5 21.2;" xml:space="preserve"><path d="M0,0l17.5,10.9L0,21.2V0z"></path><rect width="6" height="21.2"></rect><rect x="11.5" width="6" height="21.2"></rect></svg><span class="number">' + tracknumber + '</span>'
		})
		$('')
		$('<a/>',{
			class: 'audio-track',
			click: function(){
				if ( IRON.state.enable_ajax ) {
					setContinuousPlayer( eq , audioPlayer);
					audioPlayer.data('currentTrack', eq);
				}else{
					setCurrentTrack( singleTrack , eq, audioPlayer, wavesurfer);
					audioPlayer.find('.playlist li').removeClass('current');
					singleTrack.addClass('current');
					// wavesurfer.on('ready', function(){
						wavesurfer.play();
						togglePlaying( audioPlayer, wavesurfer);
					// })
				}
			},
			text: singleTrack.data('tracktitle')

		}).appendTo(singleTrack).prepend(trackplay);


	}

	function setAudio( audio, wavesurfer){
		elementAudio.src = audio
		wavesurfer.load( elementAudio );
	}

	function getTime( wavesurfer ){
		return wavesurfer.getCurrentTime()
	}

	function togglePlaying(audioPlayer, wavesurfer  ) {

		$.each(IRON.players, function(index, value){
			IRON.players[index].audioPlayer.removeClass('audio-playing');
		})

		if ( wavesurfer.isPlaying() ) {
			audioPlayer.addClass('audio-playing');
			return;
		}
		audioPlayer.removeClass('audio-playing')
	}

	function play( audioPlayer, wavesurfer ){
		if ( IRON.state.enable_ajax ) {
			var playlist = audioPlayer.find('.playlist');
			var currentTrack = audioPlayer.data('currentTrack');

			if ( ( IRON.continuousPlayer.wavesurfer.getCurrentTime() >= 0.1 || IRON.continuousPlayer.wavesurfer.isPlaying() ) && IRON.continuousPlayer.playlist.url == audioPlayer.data('url-playlist') ) {
				IRON.continuousPlayer.play()
				return
			}
			if ( IRON.continuousPlayer.wavesurfer.getDuration() == 1) {
				IRON.continuousPlayer.wavesurfer.play()
			}
			playlist.find('li').eq(currentTrack).find('a').click();
			return
		}

		wavesurfer.playPause();
		togglePlaying( audioPlayer, wavesurfer);
	}

	function previous( audioPlayer, wavesurfer, playlist ){
		var currentTrack = audioPlayer.data('currentTrack');
		var nextTrack = currentTrack - 1;

		if ('2' < getTime( wavesurfer ) ) {
			wavesurfer.seekTo(0);
			return;
		}
		playlist.find('li').eq(nextTrack).find('a').click();

	}

	function next( audioPlayer, playlist ){
		var currentTrack = audioPlayer.data('currentTrack');
		var nextTrack = currentTrack + 1;

		if ( !playlist.find('li').eq(nextTrack).length){
			nextTrack = 0;
		}
		playlist.find('li').eq(nextTrack).find('a').click();
	}

	function getPlayer(){
		return this;
	}
	function getplay(){
		play( this.audioPlayer, this.wavesurfer )
	}

	function setContinuousPlayer( eq , audioPlayer){
		IRON.continuousPlayer.setPlaylist( audioPlayer )
		IRON.continuousPlayer.setCurrentTrack( eq , audioPlayer)
	}

	return {
		init : initPlayer,
		getPlayer : getPlayer,
		play : getplay

	};

}(jQuery);


IRON.continuousPlayer = function($){

	var playlist = {
		'promise' : $.Deferred()
	}
	var playing = $.Deferred()
	var wavesurfer
	var continuousPlayer = {}
	var seekTimeOut
	this.ready =  $.Deferred()
	var playerConsent = false


	var setPlayer = function( player ){
		var ready = this.ready
		$.get( IRON.state.theme_url + '/js/assets/audioplayer.html').done(function(data){
			$('body').append(data)
			continuousPlayer = $('.continuousPlayer');
			var continuous_background = iron_vars.croma_music.continuous_background
			if ( iron_vars.croma_music.continuous_background == '' ) {
				continuous_background = 'rgb(0,0,0)'
			}
			continuousPlayer.css( 'background-color', continuous_background )

			wavesurfer = WaveSurfer.create({
				container: '#cplayer',
				cursorWidth: 0,
				barWidth: 1,
				progressColor: iron_vars.croma_music.continuous_timeline_background,
				waveColor: iron_vars.croma_music.continuous_progress_bar,
				height: 36,
				backend: 'MediaElement',
				mediaControls: false,
				partialRender: true
			});

			wavesurfer.load(elementAudio)
			IRON.continuousPlayer.wavesurfer = wavesurfer
			setControl()
			setNextSong()

			// wavesurfer.on('loading', function(){
			// 	setLoading('loading');
			// })
			wavesurfer.on('ready', function(){
				setLoading('done');
			})

			wavesurfer.on('loading', function(){
				var progressLoad = arguments[0]
				continuousPlayer.find('.progressLoading').css('background', iron_vars.croma_music.continuous_progress_bar );
				continuousPlayer.find('.progressLoading').css('width', 'calc( ' + progressLoad + '% - 200px )' )
				if (progressLoad == 100) {
					revealWave();
					continuousPlayer.find('.progressLoading').css('opacity', '0' )
				}
			})

			ready.resolve()
		})

	}

	var revealWave = function(){
		continuousPlayer.find('#cplayer').addClass('reveal')
	}


	var setPlaylist = function( audioPlayer ){
		playlist.promise = $.Deferred()

		if ( playlist.url == undefined || playlist.url != audioPlayer.data('url-playlist') ) {

			$.when( $.getJSON(audioPlayer.data('url-playlist'))).done(function(data){

				if ( ! $('body').hasClass('artistPlayer-enable') ) {
					IRON.initPusherHeight()
					continuousPlayer.addClass('enable')
					$('body').addClass('continuousPlayer-enable')
				}
				playlist.url = audioPlayer.data('url-playlist')
				playlist.list = data
				playlist.promise.resolve()
			})
		}else{
			IRON.continuousPlayer.playlist.promise.resolve()
		}
	}

	var setCurrentTrack = function( eq ,audioPlayer){


		if (playlist.currentTrack == eq && playlist.url == audioPlayer.data('url-playlist') ) {

			wavesurfer.playPause();
			setStatus()
		}else{

			playlist.currentTrack = eq
			continuousPlayer.find('#cplayer').removeClass('reveal')

			$.when( playlist.promise ).done(function(){
				setTrackInfo(eq);
				setAudio( playlist.list[eq].mp3 );

				if ( !playlist.list[eq].showLoading ) {
					continuousPlayer.find('#cplayer').addClass('hide')
				}else{
					continuousPlayer.find('.progressLoading').css('opacity', '0.75' )
				}
				if ( playerConsent || ( !isiPhone && !isiPad ) ) {
						wavesurfer.on('ready', function(){
						wavesurfer.play();
						setStatus()
					})
				}
			})
		}


	}

	var setTrackInfo = function(eq){
		$.when( playlist.promise ).done(function(){
			continuousPlayer.find('.album-art img').attr('src', playlist.list[eq].poster)
			continuousPlayer.find('.metadata .album-title').text( playlist.list[eq].album_title)
			continuousPlayer.find('.metadata .track-name').text( playlist.list[eq].track_title)
		})
	}

	var setNextSong = function(){
		wavesurfer.on('finish', function(){
			next()
		})
	}

	var setLoading = function( classes ){
		switch (classes) {
			case 'loading':
				continuousPlayer.addClass('loading')
				break;

			default:
				continuousPlayer.removeClass('loading')
		}
	}

	var setAudio = function( audio ){
			seekTimeOut = setTimeout( function(){
				elementAudio.src = audio
				wavesurfer.load( elementAudio );
			}, 250 )
	}

	function setControl(){
		var ctrl = continuousPlayer.find('.control');

		ctrl.on('click', '.play', function(){
			play()
		})
		ctrl.on('click', '.previous', function(){
			previous()
		})
		ctrl.on('click', '.next', function(){
			next()
		})

	}

	function play(){
		playerConsent = true;
		wavesurfer.playPause();
		setStatus()
	}

	var setStatus = function(){

		$.each(IRON.players, function(index, value){
			IRON.players[index].audioPlayer.removeClass('audio-playing');
		})

		if ( wavesurfer.isPlaying() ) {
			$('.iron-audioplayer[data-url-playlist="' + playlist.url + '"]').addClass('audio-playing')
			$('.iron-audioplayer[data-url-playlist="' + playlist.url + '"]').find('li').removeClass('current');
			$('.iron-audioplayer[data-url-playlist="' + playlist.url + '"]').find('li').eq( IRON.continuousPlayer.playlist.currentTrack ).addClass('current');
			continuousPlayer.addClass('audio-playing');

			return;
		}

		$('.iron-audioplayer[data-url-playlist="' + playlist.url + '"]').removeClass('audio-playing')
		$('.iron-audioplayer[data-url-playlist="' + playlist.url + '"]').find('li').removeClass('current');
		continuousPlayer.removeClass('audio-playing')
	}

	function previous(){
		clearTimeout(seekTimeOut)
		var currentTrack = playlist.currentTrack;
		var nextTrack = currentTrack - 1;

		if ('2' < getTime( wavesurfer ) ) {
			wavesurfer.seekTo(0);
			return;
		}

		if ( nextTrack < 0 ){
			nextTrack = playlist.list.length - 1;
		}
		setCurrentTrack(nextTrack);


	}

	function next(){
		clearTimeout(seekTimeOut)
		var currentTrack = playlist.currentTrack;
		var nextTrack = currentTrack + 1;

		if ( nextTrack + 1 > playlist.list.length ){
			nextTrack = 0;
		}
		setCurrentTrack(nextTrack);

	}

	function getTime(){
		return wavesurfer.getCurrentTime()
	}

	return {
		setPlayer : setPlayer,
		setPlaylist : setPlaylist,
		setCurrentTrack : setCurrentTrack,
		setTrackInfo : setTrackInfo,
		setAudio : setAudio,
		playlist : playlist,
		play : play,
		ready : this.ready
	}

}(jQuery);


IRON.artistPlayer = function($){

	var artistWavesurfer
	var artistPlayer
	var playlist = {
		'promise' : $.Deferred()
	}
	var playerConsent = false

	var setPlayer = function(){
		IRON.artistPlayer.continuousPlayer = false;
		playerConsent = false



		artistPlayer = $('.artist_player');
		var continuous_background = iron_vars.croma_music.continuous_background
		if ( iron_vars.croma_music.continuous_background == '' ) {
			continuous_background = 'rgb(0,0,0)'
		}
		artistPlayer.css( 'background-color', continuous_background )

		artistWavesurfer = WaveSurfer.create({
			container: '#artistPlayer',
			cursorWidth: 0,
			barWidth: 1,
			progressColor: iron_vars.croma_music.continuous_timeline_background,
			waveColor: iron_vars.croma_music.continuous_progress_bar,
			height: 36,
			backend: 'MediaElement',
			mediaControls: false,
			partialRender: true
		});

		artistWavesurfer.load(elementAudioSingle)
		IRON.artistPlayer.wavesurfer = artistWavesurfer
		setControl()
		setNextSong()
		IRON.artistPlayer.playlist.promise = $.Deferred();
		setPlaylist()
		setCurrentTrack(0)


		artistWavesurfer.on('loading', function(){
			var progressLoad = arguments[0]
			artistPlayer.find('.progressLoading').css('background', iron_vars.croma_music.continuous_progress_bar );
			artistPlayer.find('.progressLoading').css('width', 'calc( ' + progressLoad + '% - 275px )' )
			if (progressLoad == 100) {
				revealWave();
				artistPlayer.find('.progressLoading').css('opacity', '0' )
			}
		})


	}
	var revealWave = function(){
		artistPlayer.find('#artistPlayer').addClass('reveal')
	}

	var setPlaylist = function(){
		IRON.artistPlayer.playlist.promise = $.Deferred();

			$.when( $.getJSON(artistPlayer.data('url-playlist'))).done(function(data){
				artistPlayer.addClass('enable')

				IRON.initPusherHeight()
				$('body').addClass('artistPlayer-enable')
				playlist.url = artistPlayer.data('url-playlist')
				playlist.list = data
				IRON.artistPlayer.playlist.promise.resolve()

			})
	}

	var setCurrentTrack = function( eq , audioPlayer ){

			playlist.currentTrack = eq
			artistPlayer.find('#artistPlayer').removeClass('reveal')

			$.when( IRON.artistPlayer.playlist.promise ).done(function(){
				artistPlayer.find('.album-art img').attr('src', playlist.list[eq].poster)
				artistPlayer.find('.metadata .album-title').text( playlist.list[eq].album_title)
				artistPlayer.find('.metadata .track-name').text( playlist.list[eq].track_title)

				setAudio( playlist.list[eq].mp3 );
				if (IRON.artistPlayer.continuousPlayer) {
					transfertPlaylist()
				}

				if ( !playlist.list[eq].showLoading ) {
					artistPlayer.find('#artistPlayer').addClass('hide')
				}else{
					artistPlayer.find('.progressLoading').css('opacity', '0.75' )
				}

				if ( playerConsent ) {
					artistWavesurfer.on('ready', function(){
						artistWavesurfer.play();
						setStatus()
					})
				}

			})


	}

	var setNextSong = function(){
		artistWavesurfer.on('finish', function(){
			next()
		})
	}

	var setLoading = function( classes ){
		switch (classes) {
			case 'loading':
				artistPlayer.addClass('loading')
				break;

			default:
				artistPlayer.removeClass('loading')
		}
	}

	var setAudio = function( audio ){
		seekTimeOut = setTimeout( function(){

			if ( IRON.artistPlayer.continuousPlayer ) {
				elementAudio.src = audio
				artistWavesurfer.load( elementAudio );
			}else{
				elementAudioSingle.src = audio
				artistWavesurfer.load( elementAudioSingle );
			}

		}, 250 )
	}

	function setControl(){
		var ctrl = artistPlayer.find('.control');
		ctrl.find('.play').css({
			'fill': iron_vars.croma_music.continuous_control_color,
			'path': iron_vars.croma_music.continuous_control_color
		})
		ctrl.find('.next').css({
			'fill': iron_vars.croma_music.continuous_control_color,
			'path': iron_vars.croma_music.continuous_control_color
		})
		ctrl.find('.previous').css({
			'fill': iron_vars.croma_music.continuous_control_color,
			'path': iron_vars.croma_music.continuous_control_color
		})


		ctrl.on('click', '.play', function(){

			if (!IRON.artistPlayer.continuousPlayer) {
				playerConsent = true;
				$('.continuousPlayer').removeClass('enable')
				$('body').removeClass('continuousPlayer-enable')
				IRON.initPusherHeight()

				enableContinuousPlayer()
				transfertPlaylist()
				setPlaylist()
				setCurrentTrack( playlist.currentTrack )
			}else{
				play()
			}
		})
		ctrl.on('click', '.previous', function(){
			previous()
		})
		ctrl.on('click', '.next', function(){
			next()
		})

	}



	var enableContinuousPlayer = function(){
			IRON.artistPlayer.continuousPlayer = true;
	}

	var setStatus = function(){
		if ( artistWavesurfer.isPlaying() ) {
			artistPlayer.addClass('audio-playing');
			return;
		}
		artistPlayer.removeClass('audio-playing')
	}


	function play(){
		playerConsent = true;
		artistWavesurfer.playPause();
		setStatus()

	}

	var transfertPlaylist = function(){
		$.when( IRON.continuousPlayer.ready ).done(function(){
			IRON.continuousPlayer.setPlaylist( artistPlayer );
			$.when( IRON.continuousPlayer.playlist.promise ).done(function(){
				IRON.continuousPlayer.setTrackInfo( IRON.artistPlayer.playlist.currentTrack );
				IRON.continuousPlayer.playlist.currentTrack = IRON.artistPlayer.playlist.currentTrack;
				IRON.continuousPlayer.setAudio( IRON.continuousPlayer.playlist.list[IRON.artistPlayer.playlist.currentTrack].mp3 )
			})
		})
	}

	function previous(){
		clearTimeout(seekTimeOut)
		var currentTrack = playlist.currentTrack;
		var nextTrack = currentTrack - 1;

		if ('2' < getTime( artistWavesurfer ) ) {
			artistWavesurfer.seekTo(0);
			return;
		}

		if ( nextTrack < 0 ){
			nextTrack = playlist.list.length - 1;
		}
		setCurrentTrack(nextTrack);


	}

	function next(){
		clearTimeout(seekTimeOut)
		var currentTrack = playlist.currentTrack;
		var nextTrack = currentTrack + 1;

		if ( nextTrack + 1 > playlist.list.length ){
			nextTrack = 0;
		}
		setCurrentTrack(nextTrack);

	}

	function getTime(){
		return artistWavesurfer.getCurrentTime()
	}

	return {
		setPlayer : setPlayer,
		setPlaylist : setPlaylist,
		setCurrentTrack : setCurrentTrack,
		playlist : playlist,
		play : play,
		ready : this.ready
	}

}(jQuery);











if (jQuery('.artist_player').length) {
	IRON.artistPlayer.setPlayer()
}

IRON.continuousPlayer.setPlayer()

IRON.players = [];
jQuery('.iron-audioplayer').each(function(){

	var player = Object.create(  IRON.audioPlayer );
	player.init(jQuery(this));

	IRON.players.push(player)
})






}
/*
     FILE ARCHIVED ON 13:43:05 Feb 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:37:02 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.443
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 119.516
  LoadShardBlock: 2107.743 (3)
  PetaboxLoader3.datanode: 2159.769 (5)
  PetaboxLoader3.resolve: 201.618 (3)
  load_resource: 300.13 (2)
*/