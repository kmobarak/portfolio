import qr from 'qr-image';
import fs from 'fs';

const url = 'https://drive.google.com/file/d/1l-lI9yAkadFN-kXe5lYZfjbboVcvXGtO/view?usp=drive_link';

const qr_svg = qr.image(url, { type: 'svg' });

qr_svg.pipe(fs.createWriteStream('qr-code.svg')).on('finish', () => {
    console.log('QR code has been successfully generated and saved as qr-code.svg!');
}).on('error', (err) => {
    console.error('Error generating QR code:', err);
});