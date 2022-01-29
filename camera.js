var player = document.getElementById('player');
player.height = 640;
player.width = 480;
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var context = snapshot.getContext('2d');
var image = new Image(snapshotCanvas.width, snapshotCanvas.height);

var handleSuccess = function(stream) {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
};

captureButton.addEventListener('click', function() {

    // Draw the video frame to the canvas.
    context.scale(-1,-1);
    context.drawImage(player, 0, 0, snapshotCanvas.width,
        snapshotCanvas.height);
    console.log(context.canvas.toDataURL());
    var image = context.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href=image; // it will save locally

});

navigator.mediaDevices.getUserMedia({video: true})
    .then(handleSuccess);


