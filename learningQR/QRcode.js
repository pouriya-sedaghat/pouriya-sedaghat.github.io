const QRcode = require('qrcode');

// QRcode.toFile('qrcode.png', 'http://apple.com', { errorCorrectionLevel: 'H' }, function (e) {
//     if (e) throw e;
//     console.log('QR code saved!');
// })

// QRcode.toString('http://asus.com', { errorCorrectionLevel: 'H', type: 'webp' }, function (e, data) {
//     if (e) throw e;
//     console.log(data);
// })

// const fs = require('fs');
// QRcode.toBuffer('http://philips.com', { errorCorrectionLevel: 'H', type: 'webp' }, function (e, buffer) {
//     if (e) throw e;
//     console.log(buffer);
//     fs.writeFileSync('qrcode.png',buffer)
// })

// const fs = require('fs');
// const stream = fs.createWriteStream('car.webp');
// QRcode.toFileStream(stream, 'http://htc.com', { errorCorrectionLevel: 'H' }, function (e) {
//   if (e) throw e;
//   console.log('QRcode saved');
// })

// QRcode.toCanvas(DomNodeOfCanvas, 'hiiiiii', function (e) {
//     if (e) console.log(e);
//     console.log('success');
// })

// const imageDataURI = require('image-data-uri');
// QRcode.toDataURL('http://peach.com', function (e, url) {
//     if (e) console.log(e);
//     console.log(url);
//     imageDataURI.outputFile(url,'qrcode.png')
// })

// const fs = require('fs');
// const Jimp = require('jimp');
// const qrCodeReader = require('qrcode-reader');

// const buffer = fs.readFileSync('car.jpg');
// Jimp.read(buffer, function (e, image) {
//     if (e) {
//         console.error(e);
//     }

//     const qrCodeInstance = new qrCodeReader();

//     qrCodeInstance.callback = function (e, value) {
//         if (e) {
//             console.error(e);
//         }
//         console.log(value.result);
//     };

//     qrCodeInstance.decode(image.bitmap);
// });



// const fs = require('fs');
// const qr = require('qr-image');

// const qr_img = qr.imageSync('text', { ec_level: 'H', type: 'png' });

// fs.writeFileSync('qrcode.webp', qr_img);