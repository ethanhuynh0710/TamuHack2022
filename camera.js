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
    /*context.drawImage(player, 0, 0, snapshotCanvas.width,
        snapshotCanvas.height);*/
    reversePic();
    console.log(context.canvas.toDataURL());
    var image = context.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href=image; // it will save locally

});

navigator.mediaDevices.getUserMedia({video: true})
    .then(handleSuccess);

function reversePic() {
    //context.drawImage(player, 0, 0, snapshotCanvas.width,
      //  snapshotCanvas.height);

    //move to x + img's width
    context.translate(snapshotCanvas.width + image.width, snapshotCanvas.height);
    console.log(snapshotCanvas.width , image.width, snapshotCanvas.height);
    
    //scaleX by -1; this reverses the pic
    context.scale(-1,1);

    context.drawImage(player,0,0, snapshotCanvas.width, snapshotCanvas.height);

    // always clean up -- reset transformations to default
    //context.setTransform(1,0,0,1,0,0);
}
