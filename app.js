"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function map(n) {
    google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
      var map = this;
      var ov = new google.maps.OverlayView();

      ov.onAdd = function () {
        var proj = this.getProjection();
        var aPoint = proj.fromLatLngToContainerPixel(latlng);
        aPoint.x = aPoint.x + offsetX;
        aPoint.y = aPoint.y + offsetY;
        map.panTo(proj.fromContainerPixelToLatLng(aPoint)); //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
      };

      ov.draw = function () {};

      ov.setMap(this);
    };

    var markers = new Array();
    var infowindow = new google.maps.InfoWindow({//pixelOffset: new google.maps.Size(-230,250)
    });
    var locations = [[new google.maps.LatLng(53.819055, 27.8813694)]];
    var options = {
      zoom: 10,
      panControl: false,
      mapTypeControl: false,
      center: locations[0][0],
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    var icon = {
      url: 'img/icons/map.svg',
      scaledSize: new google.maps.Size(18, 20),
      anchor: new google.maps.Point(9, 10)
    };

    for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        //icon:icon,
        position: locations[i][0],
        map: map
      });
      markers.push(marker);
    }
  }

  if (document.querySelector("#map")) {
    map();
  }

  var forms = document.querySelectorAll('form'),
      AllInputs = document.querySelectorAll('input'),
      statusPost = document.querySelector('.form__button-message'),
      informMessageArray = {
    loading: 'loading...',
    success: "We'll contact you shortly",
    failure: 'something went wrong'
  };

  function changeInputValue(input) {
    var saveValueInput = '';
    input.value = input.getAttribute('data-value');
    input.addEventListener('input', function () {
      input.classList.remove('disable-submit');
      saveValueInput = input.value;
    });
    input.addEventListener('focus', function () {
      input.value = saveValueInput;
    });
    input.addEventListener('blur', function () {
      if (input.value === '') {
        input.value = input.getAttribute('data-value');
      }
    });
  }

  AllInputs.forEach(function (input) {
    return changeInputValue(input);
  });
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var required = true;
      AllInputs.forEach(function (input) {
        if (input.classList.contains('_req')) {
          if (!input.value || input.value == input.getAttribute('data-value')) {
            input.classList.add('disable-submit');
            required = false;
            e.preventDefault();
          }
        }
      });

      if (required) {
        e.preventDefault();

        var postData = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, data) {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(url, data);

                  case 2:
                    result = _context.sent;
                    _context.next = 5;
                    return result.text();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function postData(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }(),
            cleanInput = function cleanInput() {
          AllInputs.forEach(function (input) {
            return changeInputValue(input);
          });
        };

        statusPost.textContent = informMessageArray.loading;
        statusPost.style.color = 'green';
        var formData = new FormData(form);
        postData('server.php', {
          method: 'POST',
          body: formData
        }).then(function (res) {
          console.log(res);
          statusPost.textContent = informMessageArray.success;
          statusPost.style.color = 'green';
        }).catch(function () {
          statusPost.textContent = informMessageArray.failure;
          statusPost.style.color = 'red';
        }).finally(function () {
          cleanInput();
          setTimeout(function () {
            statusPost.textContent = '';
          }, 5000);
        });
      }
    });
  });
});