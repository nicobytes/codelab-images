const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const webp = require('imagemin-webp');

const directory = './src/assets/images';

(async () => {
  const files = await imagemin([directory], {
    destination: directory,
    plugins: [
      pngquant({quality: [0.5, 0.5]}),
      mozjpeg({quality: 50}),
      webp({quality: 50})
    ],
  });
  console.log(files);
})();