// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const ref = {
    gallery: document.querySelector('.gallery'),
};

const galleryHtml = galleryItems.map(img => {
    return `<li class='gallery__item'>
        <a class='gallery__link' href="${img.original}">
            <img class='gallery__image' src='${img.preview}' alt='${img.description}' />
        </a>
    </li>`
}).join('');
ref.gallery.innerHTML = galleryHtml;

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});


console.log(galleryItems);
