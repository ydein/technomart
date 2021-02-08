	var link = document.querySelector(".login-link");
	var popup = document.querySelector(".modal-login");
	var close = popup.querySelector(".modal-close");

	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=login]");
	var password = popup.querySelector("[name=password]");

	var isStorageSupport = true;
	var storage = "";

	try {
		storage = localStorage.getItem("login");
	} catch (err) {
		isStorageSupport = false;
	}

	link.addEventListener("click", function (evt) {

		evt.preventDefault();
		popup.classList.add("modal-show");

		if (storage) {
		login.value = storage;
		password.focus();
		} 	else {
			login.focus();
		}
	});


	close.addEventListener("click", function (evt) {

		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function (evt) {
		if (!login.value || !password.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
			localStorage.setItem("login", login.value);	
			}			
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
			if (writePopup.classList.contains("modal-show")) {
				writePopup.classList.remove("modal-show");					
			}
			if (mapPopup.classList.contains("modal-show")) {
				mapPopup.classList.remove("modal-show");					
			}
		}
	});

	var writeLink = document.querySelector(".contacts-button");
	var writePopup = document.querySelector(".write-us");
	var writeClose = writePopup.querySelector(".modal-close");	

	writeLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.add("modal-show");
	});

	writeClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.remove("modal-show");
	});


	var mapLink = document.querySelector(".contacts-button-map");
	var mapPopup = document.querySelector(".modal-map");
	var mapClose = mapPopup.querySelector(".modal-close");	

	mapLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});


/*	
	var addedLink = document.querySelector(".popular-goods-checkout");
	var addedPopup = document.querySelector(".added");
	var addedClose = addedPopup.querySelector(".modal-close");	

	addedLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		addedPopup.classList.add("modal-show");
	});

	addedClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		addedPopup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function(evt) {
		evt.preventDefault();
		if (evt.keyCode === 27) {
			if (addedPopup.classList.contains("modal-show")) {
				addedPopup.classList.remove("modal-show");					
			}
		}
	});
	*/

	//Tiny-slider
	  var slider = tns({
    container: '.tiny-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    mode: "gallery",
    controlsPosition: 'bottom'
  });