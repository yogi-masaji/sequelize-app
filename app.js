const express = require('express');
const router = require('./routes/index');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'pug');
app.use(router);

app.listen(port, () => {
  console.log('server is listening on port', port);
});


// const {Photo} = require('./models/index');

// Photo.create({
//     title: 'photo 4',
//     caption: 'deskripsi poto4',
//     image_url: 'http://photos.com/photos4',
// })

// Photo.update({
//     image_url: 'https://preview.redd.it/4vatlaqj0i791.jpg?width=226&format=pjpg&auto=webp&s=c24bfa9f9a60808345cfc7cd5d02bee208fabde7',
// },{
//     where: {id: 4}
// })

// Photo.update({
//     title: 'photo update 4',
// },{
//     where: {id: 4}
// })


// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })