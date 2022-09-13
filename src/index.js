// import './custom.scss'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./js/gallery-items";
import $ from "jquery";

const galleryEl = document.querySelector(".gallery");

$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr("href");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor).offset().top - 80,
      },
      800
    );
});

// const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     console.log(menuLink);
//     if (
//       menuLink.dataset.goto &&
//       document.querySelector(menuLink.dataset.goto)
//     ) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotpBlockValue =
//         gotoBlock.getBoundingClientRect().top +
//         scrollY -
//         document.querySelector(".header").scrollIntoView;
//       window.scrollTo({
//         top: gotpBlockValue,
//         block: "start",
//         behavior: "smooth",
//       });

//       e.preventDefault();
//     }
//   }
// }

// const anchors = document.querySelectorAll("a[href*='#']");
// for (let anchor of anchors) {
//   if (anchor) {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       const anchorId = anchor.getAttribute("href");
//       console.log(anchorId);
//       document.querySelector(anchorId).scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         top: "80px",
//       });
//     });
//   }
// }

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

// const scrollAnchors = (e) => {
//   e.preventDefault();
//   const anchorId = this.getAttribute("href");
//   document.querySelector(anchorId).scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// };
