// import './custom.scss'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./js/gallery-items";

const galleryEl = document.querySelector(".gallery");
const anchors = document.querySelectorAll("a[href*='#']");
for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const anchorId = anchor.getAttribute("href");
      console.log(anchorId);
      document.querySelector(anchorId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

galleryEl.style.listStyle = "none";

function addGalleryMarkup(gallery) {
  return gallery
    .map(
      ({ original, preview, description }) =>
        `
        <li>
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}"/>
            </a>
        </li>
        `
    )
    .join("");
}

galleryEl.innerHTML = addGalleryMarkup(galleryItems);

const instance = new SimpleLightbox(".gallery a", {
  animationSpeed: 250,
  loop: true,
  enableKeyboard: true,
  preloading: true,
  docClose: true,
  captionsData: "alt",
});

const scrollAnchors = (e) => {
  e.preventDefault();
  const anchorId = this.getAttribute("href");
  document.querySelector(anchorId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
