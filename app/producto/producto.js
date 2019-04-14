var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var id = getUrlParameter('id');

console.log(id);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQeRh2IKGHJMlW--scfgycYBQvHKyWjy8",
  authDomain: "ripleylabs-f9425.firebaseapp.com",
  databaseURL: "https://ripleylabs-f9425.firebaseio.com",
  projectId: "ripleylabs-f9425",
  storageBucket: "ripleylabs-f9425.appspot.com",
  messagingSenderId: "542394243494"
};
firebase.initializeApp(config);
var db = firebase.firestore();

update(id);
function update(id) {
	db.collection("catalog")
	  .where('co_id', '==', id)
	  .get()
		.then(function(querySnapshot) {
		    querySnapshot.forEach(function(doc) {
		    	var producto = doc.data();
		    	$('#imagen').prepend('<img class="product-img" id="theImg" src="' + producto.img + '" />');
		    	$('#product-title').text(producto.name);
		        console.log(doc.id, " => ", doc.data());
		    });
		});
}


function volver() {
    window.location.href = "../home/home.html"
}

function atenderCliente() {
    window.location.href = "../vendedor/vendedor.html"
}

function comprar() {
    window.location.href = "../comprar/comprar.html"
}