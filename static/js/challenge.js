$(document).ready(function() {
    $('#success').hide();
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
    var overlayCueImg = document.getElementById('overlayCueImg');
    var notifyTxt = document.getElementById('notifyTxt');
    var posImg = overlayImg.innerHTML;

    var timeleft = 11;
    var downloadTimer = setInterval(function(){
        timeleft--;
        overlayTxt.textContent = timeleft;

        if(timeleft <= 0) {
            clearInterval(downloadTimer);
            Webcam.snap( function(data_uri) {
                overlayTxt.textContent = "";
                document.getElementById('overlayImg1').innerHTML = '<img width="320px" src="'+data_uri+'"/>';
            });
            overlayCueImg.style.background="Transparent";
            $('#success').show();
        }else if(timeleft < 6){
            overlayCueImg.innerHTML = posImg;
            overlayImg.innerHTML = '';
            $('#photo').css('width', '200px');
            $('#photo').css('position', 'absolute');
            $('#photo').css('bottom', '0px');

            overlayCueImg.style.width = "200px";
            overlayCueImg.style.background = "#F3C242";

            // overlayCueImg.style.width = "150px";

            notifyTxt.textContent = '';
            overlayImg.style.backgroundColor = "transparent";
        }
    },1000);
}