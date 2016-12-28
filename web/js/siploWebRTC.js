var idealWidth  = 320;
var idealHeight = 240;

var minWidth = 320;
var minHeight = 240;

var maxWidth = 320;
var maxHeight = 240;

if(myRole=='teacher'){}

var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true,

    //url: location.protocol+'//'+location.hostname+':8889',
    url: 'https://media.siplo.xyz',
    media:{
            audio:true,
            video: {
                width: {min: minWidth, ideal: idealWidth, max: maxWidth},
                height: {min: minHeight, ideal: idealHeight, max:maxHeight},
                frameRate: 13     // Shorthand for ideal.
            }

    }
});

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    // you can name it anything
    console.log("joining room");
    webrtc.joinRoom('classroom','role_student');
    //webrtc.sendToAll('readyToCall','pa');


});
webrtc.on('connectionReady', function (sessionId) {
    console.log('connection ready. session id: '+sessionId);
    webrtc.sendToAll('connectionReady','pa');

});

webrtc.on('createdPeer', function (peer) {

    console.log('peer created '+peer.role+' type: '+ peer.type);
    webrtc.sendToAll('peer created','pa');

});
// a peer video has been added
webrtc.on('videoAdded', function (video, peer) {
    console.log('video added', peer);

    var remotes = document.getElementById('remotes');
    if (remotes) {
        var container = document.createElement('div');
        container.className = 'videoContainer';
        container.id = 'container_' + webrtc.getDomId(peer);
        container.appendChild(video);

        // suppress contextmenu
        video.oncontextmenu = function () { return false; };


            remotes.appendChild(container);

    }
});
