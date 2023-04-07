function generateQR() {
    document.querySelector('#qr-image').style.display = 'block';
    let QRtext = document.querySelector('#text').value;
    if (QRtext.trim().length == 0) {
        document.querySelector('#qr-image .error').innerHTML = 'Please enter your text';
        document.querySelector('#qr-image img').style.display = 'none';
    } else {
        document.querySelector('#qr-image img').style.display = 'block';
        document.querySelector('#qr-image .error').innerHTML = '';
        document.querySelector('#qr-image img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=' + QRtext;
    }
}

document.querySelector('button').addEventListener('click', function() {
    document.querySelector('input').value = '';
});