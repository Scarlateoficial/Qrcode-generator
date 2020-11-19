$('.generate-qr-code').on('click', function(){

    // Clear Previous QR Code
    $('#qrcode').empty();
    
    // Set Size to Match User Input
    $('#qrcode').css({
    'width' : $('.qr-size').val(),
    'height' : $('.qr-size').val()
    })
    
    // Generate and Output QR Code
    $('#qrcode').qrcode({width: $('.qr-size').val(),height: $('.qr-size').val(),text: $('.qr-url').val()});
    var canvas = document.getElementsByTagName("canvas")
    const downloadURL = canvas[0].toDataURL("image/png");
    document.getElementById('downloadLink').href = downloadURL;
    
});
