import { fetchImages } from './js/pixabay-api.js';
import {
  createImageCard,
  showNotification,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    showNotification('Please enter a search query.');
    return;
  }

  gallery.innerHTML = '';
  showLoadingIndicator();

  fetchImages(query)
    .then(images => {
      hideLoadingIndicator();

      if (images.length === 0) {
        showNotification(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      gallery.innerHTML = createImageCard(images);
      lightbox.refresh();
    })
    .catch(error => {
      hideLoadingIndicator();
      showNotification('Something went wrong. Please try again later.');
    });
  event.target.reset();
});
