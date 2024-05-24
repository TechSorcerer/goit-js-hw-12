import { fetchImages } from './js/pixabay-api.js';
import {
  createImageCard,
  showNotification,
  showLoadingIndicator,
  hideLoadingIndicator,
  showLoadMoreButton,
  hideLoadMoreButton,
  showEndLoad,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import iziToast from 'izitoast';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.js-load-more-btn');
let page = 1;

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  page = 1;
  gallery.innerHTML = '';
  showLoadingIndicator();

  hideLoadMoreButton();
  const query = searchInput.value.trim();
  if (query === '') {
    showNotification('Please enter a search query.');
    return;
  }

  loadImages(query);
});

loadMoreBtn.addEventListener('click', () => {
  page++;
  const query = searchInput.value.trim();
  showLoadingIndicator();
  loadImages(query);
  LoadMoreButton(query);
});

async function loadImages(query) {
  try {
    const images = await fetchImages(query, page);
    const totalHits = images.totalHits;

    if (images.length === 0) {
      hideLoadMoreButton();
      showNotification(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      gallery.innerHTML += createImageCard(images.hits);
      lightbox.refresh();
      showLoadMoreButton();

      const cardHeight = gallery.children[0].getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });

      if (gallery.children.length >= totalHits) {
        hideLoadMoreButton();
        showEndLoad();
      }
    }
  } catch (error) {
    showNotification('Something went wrong. Please try again later.');
  } finally {
    hideLoadingIndicator();
  }
  searchInput.value = '';
}

async function LoadMoreButton(query) {
  const images = await fetchImages(query, page);
  if (images.length === 0) {
    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
}
