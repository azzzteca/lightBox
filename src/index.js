import './sass/main.scss';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// let gallery = new SimpleLightbox('.gallery a');

// gallery.on('show.simplelightbox', function () {});

// document.addEventListener('');

let gallery = new SimpleLightbox('.gallery a');

gallery.on('shown.simplelightbox', function (e) {
  e.preventDefault();
  // Do something…
});
