const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

const directory = './src/assets/images';

(async () => {
  const files = await imagemin([directory], {
    destination: directory,
    plugins: [
      pngquant({quality: [0.5, 0.5]}),
      mozjpeg({quality: 50}),
    ],
  });
  console.log(files);
})();