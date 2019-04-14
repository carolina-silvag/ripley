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
  db.collection("catalog").where('type', '==', 'watch')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            $('#here').append(`<div class="col-xs-6 product-container">
            <a onClick="gethol('${doc.data().co_id}')"><img class="productos" src="${doc.data().img}"></a>
            <h4 class="images-title">${doc.data().name}</h4>
            </div>`)
        });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
  });

  function gethol(co_id) {
    var url = "../producto/producto.html?id=" + co_id
	  
    var docData = {
        query: co_id,
        timestamp: new Date()
    };

    db.collection("consultas").doc('lueSbdBvAIvXbBMZtEC4').set(docData).then(function() {
        console.log("Document successfully written!");
        //window.location.href = "../producto/producto.html?id=" + co_id
    }, { merge: true });
    
    //producto(co_id)

}