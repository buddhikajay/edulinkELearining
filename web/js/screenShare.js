/**
 * Created by buddhikajay on 12/27/16.
 */

var screenShareButton = null;

window.onload = function () {
    screenShareButton = document.getElementById('screenShareButton');
    setButton = function (bool) {
        screenShareButton.innerText = bool ? 'Share Screen' : 'stop sharing';
    };
    // if (!webrtc.capabilities.screenSharing) {
    //    screenShareButton.disabled = 'disabled';
    // }
    webrtc.on('localScreenRemoved', function () {
        setButton(true);
    });

    setButton(true);

    screenShareButton.onclick = (function () {
        console.log("screenShareButton clicked");
        if (webrtc.getLocalScreen()) {
            webrtc.stopScreenShare();
            delete webrtc.getLocalScreen();
            console.log("screen share already started");
            setButton(true);
            location.reload();
        } else {
            webrtc.shareScreen(function (err) {
                if (err) {
                    console.log("screen share error:",err.name,err);
                    setButton(true);
                } else {
                    console.log("screen share avaliable");
                    setButton(false);
                }
            });

        }
    });
}


// local screen obtained
webrtc.on('localScreenAdded', function (video) {
    video.onclick = function () {
        video.style.width = "9vw";
        video.style.height = video.videoHeight-500 + 'px';
    };
    document.getElementById('remoteVideos').appendChild(video);
    // $('#localScreenContainer').show();
});
// local screen removed
webrtc.on('localScreenRemoved', function (video) {
    document.getElementById('remoteVideos').removeChild(video);
    // $('#localScreenContainer').hide();
});