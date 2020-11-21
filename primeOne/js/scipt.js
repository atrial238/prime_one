/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/app.js":
/*!************************!*\
  !*** ./#src/js/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_isSupportWebp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/isSupportWebp.js */ "./#src/js/files/isSupportWebp.js");
/* harmony import */ var _files_headerMobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/headerMobile.js */ "./#src/js/files/headerMobile.js");
/* harmony import */ var _files_menuActive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/menuActive.js */ "./#src/js/files/menuActive.js");
/* harmony import */ var _files_imageToBackground_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/imageToBackground.js */ "./#src/js/files/imageToBackground.js");
/* harmony import */ var _files_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/map.js */ "./#src/js/files/map.js");
/* harmony import */ var _files_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/form.js */ "./#src/js/files/form.js");








window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	
		Object(_files_isSupportWebp_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
		Object(_files_headerMobile_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
		Object(_files_menuActive_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
		Object(_files_imageToBackground_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
		Object(_files_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
		Object(_files_form_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
		
});


/***/ }),

/***/ "./#src/js/files/form.js":
/*!*******************************!*\
  !*** ./#src/js/files/form.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function forms () {
	const allforms = document.querySelectorAll('form'),
		allInputs = document.querySelectorAll('input'),
		statusPost = document.querySelector('.form__button-message'),
		informMessageArray = {
			loading: 'loading...',
			success: "We'll contact you shortly",
			failure: 'something went wrong'
	  };

function changeInputValue(input){
	let saveValueInput = '';
	
	input.value = input.getAttribute('data-value');

	input.addEventListener('input', () => {
			input.classList.remove('disable-submit');
			saveValueInput = input.value;
	});

	input.addEventListener('focus', () => {
		input.value =  saveValueInput;
	});

	input.addEventListener('blur', () => {
		if(input.value ===  ''){
			input.value = input.getAttribute('data-value');
		}
	});

}

allInputs.forEach(input => changeInputValue(input));

allforms.forEach(form => {

	form.addEventListener('submit', (e) => {

		let required = true;

		allInputs.forEach(input => {

			if(input.classList.contains('_req')){
				 if(!input.value || input.value == input.getAttribute('data-value') ){
					input.classList.add('disable-submit');
					required = false;
					e.preventDefault();
				 }
			}
		});

		if(required){
			e.preventDefault();

			const postData = async (url, data) => {
						const result = await fetch(url, data);
						return await result.text();
					},
					cleanInput = () => {
						allInputs.forEach(input => changeInputValue(input));
				  };
			
			statusPost.textContent = informMessageArray.loading;
			statusPost.style.color = 'green';

			const formData = new FormData(form);

			postData('server.php', {
				 method: 'POST',
				 body: formData
			})
			.then((res) => {
				 console.log(res);
				 statusPost.textContent = informMessageArray.success;
				 statusPost.style.color = 'green';
			})
			.catch(() => {
				 statusPost.textContent = informMessageArray.failure;
				 statusPost.style.color = 'red';
			})
			.finally(() => {
				 	cleanInput();
				 	setTimeout(() => {
					  statusPost.textContent = '';
				 	}, 5000);
				});
			}
		});
	});
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./#src/js/files/headerMobile.js":
/*!***************************************!*\
  !*** ./#src/js/files/headerMobile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function headerMobile () {
	const containerMenu = document.querySelectorAll('.header-bottom-menu'),
			menu = document.querySelectorAll('.header-bottom-menu__list'),
			menuMobile = document.querySelector('.header-menu-mobile'),
			lenguage = document.querySelector('.header-top__leng'),
			containerLenguage = document.querySelector('.header-top');

	function changeMenu() {
		const widthWindow = window.innerWidth;

		if(widthWindow < 767.98) {
			console.log(widthWindow)
			menuMobile.insertAdjacentElement('beforeend', lenguage);
			menu.forEach(item => {

				item.style.display = 'block';
				menuMobile.insertAdjacentElement('beforeend', item);
					console.log(1)
				});
		}else{
			containerLenguage.insertAdjacentElement('afterbegin', lenguage);
			menu.forEach(item => {
				item.style.display = 'flex';
				if(item.classList.contains('header-bottom-menu-right__list')){
					containerMenu[1].insertAdjacentElement('beforeend', menu[1]);
				}else{
					containerMenu[0].insertAdjacentElement('beforeend', menu[0]);
				}
			});
		}
	}
			
	window.addEventListener('resize',  changeMenu);
	changeMenu();
}
/* harmony default export */ __webpack_exports__["default"] = (headerMobile);


/***/ }),

/***/ "./#src/js/files/imageToBackground.js":
/*!********************************************!*\
  !*** ./#src/js/files/imageToBackground.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isIE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isIE */ "./#src/js/files/isIE.js");


function ibg(){
	const ibg = document.querySelectorAll('.img-bg');
	
	for (var i = 0; i < ibg.length; i++) {

		if(Object(_isIE__WEBPACK_IMPORTED_MODULE_0__["default"])()){

			if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				ibg[i].querySelector('img').style.width = '0px';
				ibg[i].querySelector('img').style.height = '0px';

			}
		}else if(ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null){
			
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
			ibg[i].querySelector('img').style.width = '0px';
			ibg[i].querySelector('img').style.height = '0px';
		}	
	}
}
/* harmony default export */ __webpack_exports__["default"] = (ibg); 


/***/ }),

/***/ "./#src/js/files/isIE.js":
/*!*******************************!*\
  !*** ./#src/js/files/isIE.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isIE() {
	var ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
/* harmony default export */ __webpack_exports__["default"] = (isIE);

/***/ }),

/***/ "./#src/js/files/isSupportWebp.js":
/*!****************************************!*\
  !*** ./#src/js/files/isSupportWebp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function testWebp () {
	function test(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	test(function (support) {
	
		if (support == true) {
			document.querySelector('body').classList.add('_webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (testWebp);

/***/ }),

/***/ "./#src/js/files/map.js":
/*!******************************!*\
  !*** ./#src/js/files/map.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function map(){
	
	function initMap(){
		const location = {lat: 61.184986, lng: 6.850078},
				options =  {
					center: location,
					zoom: 12
				};
		const map = new google.maps.Map(document.getElementById('map'), options);
		const marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: {
				url: '../img/icons/marker_for_maps/location1.png'
			}
		 });
	}
	initMap();
}
/* harmony default export */ __webpack_exports__["default"] = (map);





/***/ }),

/***/ "./#src/js/files/menuActive.js":
/*!*************************************!*\
  !*** ./#src/js/files/menuActive.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function menuActive() {
	const burger =document.querySelector('.burger-menu'),
			menu = document.querySelector('.header-menu-mobile');

			burger.addEventListener('click', () => {
				
				burger.classList.toggle('_active');
				menu.classList.toggle('_active');
				window.document.body.classList.toggle('_lock');
				
			});
}
/* harmony default export */ __webpack_exports__["default"] = (menuActive);


/***/ })

/******/ });
//# sourceMappingURL=script.js.map