// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector('.gallery');
let instance = null;

const createGallery = (galleryItems) =>
    galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link"
                href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`).join('');   

gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));

const galleryOptions = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '300ms',
});

galleryOptions.addEventListener('click', onImgClick);

function onEscPress(e){
    if (e.code === 'Escape') {
        instance.close();
    };
};

galleryOptions.addEventListener('click', onEscPress);