$(document).ready(function() {
    $(document.body).css("background-image","");
    $(document.body).css("background-color","#0436ff");
    countDown();
    Webcam.set({
        width: 640,
        height: 480,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach( '#my_camera' );
});

function countDown(){
    var overlayTxt = document.getElementById('overlayTxt');
    var overlayImg = document.getElementById('overlayImg');

    var timeleft = 6;
    var downloadTimer = setInterval(function(){
        timeleft--;
        overlayTxt.textContent = timeleft;
        if(timeleft <= 0) {
            clearInterval(downloadTimer);
            Webcam.snap( function(data_uri) {
                //http://47.74.149.35/api/photo/53r9uxElqEEY0S20uC6SoO?hashCodes=MYKURU&width=400
                overlayTxt.textContent = "";
                document.getElementById('my_camera').innerHTML = '<img src="'+data_uri+'"/>';
            } );
        }
    },1000);
}