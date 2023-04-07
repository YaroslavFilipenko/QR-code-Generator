function generateQR() {
    $('#qr-image').css('display', 'block');
    let QRtext = $('#text').val();
    if (QRtext.trim().length == 0) {
        $('#qr-image .error').html('Please enter your text');
        $('#qr-image img').css('display', 'none');
    } else {
        $('#qr-image img').css('display', 'block');
        $('#qr-image .error').html('');
        $('#qr-image img').attr('src', 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=' + QRtext);
    }
}

$('button').on('click', function() {
    $('input').val('');
});
