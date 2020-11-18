"use strict";

// include('files/regular.js', {})
// include('files/script.js', {})
// include('files/functions.js', {})
// include('files/forms.js', {})
// include('files/scroll.js', {})
window.addEventListener('DOMContentLoaded', function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('_webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });

  function headerMobile() {
    var containerMenu = document.querySelectorAll('.header-bottom-menu'),
        menu = document.querySelectorAll('.header-bottom-menu__list'),
        menuMobile = document.querySelector('.header-menu-mobile'),
        lenguage = document.querySelector('.header-top__leng'),
        containerLenguage = document.querySelector('.header-top');

    function changeMenu() {
      var widthWindow = document.documentElement.clientWidth;

      if (widthWindow < 767.98) {
        menuMobile.insertAdjacentElement('beforeend', lenguage);
        menu.forEach(function (item) {
          item.style.display = 'block';
          menuMobile.insertAdjacentElement('beforeend', item);
        });
      } else {
        containerLenguage.insertAdjacentElement('afterbegin', lenguage);
        menu.forEach(function (item) {
          item.style.display = 'flex';

          if (item.classList.contains('header-bottom-menu-right__list')) {
            containerMenu[1].insertAdjacentElement('beforeend', menu[1]);
          } else {
            containerMenu[0].insertAdjacentElement('beforeend', menu[0]);
          }
        });
      }
    }

    window.addEventListener('resize', changeMenu);
    changeMenu();
  }

  headerMobile();

  function menuActive() {
    var burger = document.querySelector('.burger-menu'),
        menu = document.querySelector('.header-menu-mobile');
    burger.addEventListener('click', function () {
      burger.classList.toggle('_active');
      menu.classList.toggle('_active');
      window.document.body.classList.toggle('_lock');
    });
  }

  menuActive();

  function ibg() {
    var ibg = document.querySelectorAll(".img-bg");

    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
      } else if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }

  ibg();
});