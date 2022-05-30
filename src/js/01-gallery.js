import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryContainer = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(
    image =>
      `<a href="${image.original}">
                <img
                src="${image.preview}"
                alt="${image.description}"
                />
            </a>`,
  )
  .join('');

galleryContainer.innerHTML = createGallery;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  close: false,
  showCounter: false,
});

