// include('files/regular.js', {})
// include('files/script.js', {})
// include('files/functions.js', {})
// include('files/forms.js', {})
// include('files/scroll.js', {})
window.addEventListener('DOMContentLoaded', () => {
	
	// function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('_webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
})

	// function headerMobile () {
	const containerMenu = document.querySelectorAll('.header-bottom-menu'),
			menu = document.querySelectorAll('.header-bottom-menu__list'),
			menuMobile = document.querySelector('.header-menu-mobile'),
			lenguage = document.querySelector('.header-top__leng'),
			containerLenguage = document.querySelector('.header-top');

	function changeMenu() {
		const widthWindow = document.documentElement.clientWidth;

		if(widthWindow < 767.98) {
			menuMobile.insertAdjacentElement('beforeend', lenguage);
			menu.forEach(item => {

				item.style.display = 'block';
				menuMobile.insertAdjacentElement('beforeend', item);
					
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
headerMobile();
	// function menuActive() {
	const burger =document.querySelector('.burger-menu'),
			menu = document.querySelector('.header-menu-mobile');

			burger.addEventListener('click', () => {
				
				burger.classList.toggle('_active');
				menu.classList.toggle('_active');
				window.document.body.classList.toggle('_lock');
				
			});
}
menuActive();
	// function ibg(){

	const ibg = document.querySelectorAll(".img-bg");
			
		for (var i = 0; i < ibg.length; i++) {

			if(ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null){

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';

			}else if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null){

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}	
	}
}
ibg();
	// function map(n){
	
	google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
		var map = this;
		var ov = new google.maps.OverlayView(); 
		ov.onAdd = function() { 
			var proj = this.getProjection(); 
			var aPoint = proj.fromLatLngToContainerPixel(latlng);
			aPoint.x = aPoint.x+offsetX;
			aPoint.y = aPoint.y+offsetY;
			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
		}
		ov.draw = function() {};
		ov.setMap(this);
	};
	var markers = new Array();
	var infowindow = new google.maps.InfoWindow({
		//pixelOffset: new google.maps.Size(-230,250)
	});
	var locations = [
		[new google.maps.LatLng(53.819055,27.8813694)]
	]
	var options = {
		zoom: 10,
		panControl:false,
		mapTypeControl:false,
		center: locations[0][0],
		scrollwheel:false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}; 
	var map = new google.maps.Map(document.getElementById('map'), options);
	var icon={
		url:'img/icons/map.svg',
		scaledSize: new google.maps.Size(18, 20),
		anchor: new google.maps.Point(9, 10)
	}
	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			//icon:icon,
			position: locations[i][0],
			map: map,
		});
		markers.push(marker);
	}
}
if(document.querySelector("#map")){
	map();

}

	// const forms = document.querySelectorAll('form'),
		AllInputs = document.querySelectorAll('input'),
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

AllInputs.forEach(input => changeInputValue(input));

forms.forEach(form => {

	form.addEventListener('submit', (e) => {

		let required = true;

		AllInputs.forEach(input => {

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
						AllInputs.forEach(input => changeInputValue(input));
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

});
