/**
 * Created by buddhikajay on 12/27/16.
 */

var screenShareButton = null;
window.onload = function () {
    screenShareButton = document.getElementById('screenShareButton');
    setButton = function (bool) {
        screenShareButton.innerText = bool ? 'share screen' : 'stop sharing';
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
            setButton(true);
        } else {
            webrtc.shareScreen(function (err) {
                if (err) {
                    setButton(true);
                } else {
                    setButton(false);
                }
            });

        }
    });
}


// local screen obtained
webrtc.on('localScreenAdded', function (video) {
    video.onclick = function () {
        video.style.width = video.videoWidth + 'px';
        video.style.height = video.videoHeight + 'px';
    };
    document.getElementById('remoteVideos').appendChild(video);
    // $('#localScreenContainer').show();
});
// local screen removed
webrtc.on('localScreenRemoved', function (video) {
    document.getElementById('remoteVideos').removeChild(video);
    // $('#localScreenContainer').hide();
});