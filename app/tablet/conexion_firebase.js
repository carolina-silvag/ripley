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

var map = {
  'mpm00001199548' : 'reloj-baby-g.gif',
  '2000371579783p' : 'reloj-gold-rose.gif',
  'mpm00000277491' : 'reloj-baby-g.gif',
  '2000365054449p' : 'reloj-nixon.gif',
  'mpm00000043076' : 'momo.gif',
  'mpm00000039914' : 'momo.gif',
  'mpm00002043732' : 'reloj-baby-g.gif'
}
db.collection("consultas")
  .doc('lueSbdBvAIvXbBMZtEC4')
  .onSnapshot(function(doc) {
    var producto = doc.data();
    var id = producto.query;
    var gif = map[id];
    console.log("Current data: ", id, gif);
    $('#bg').css("background-image", "url('../../assets/img/gif/"+ gif +"')");  
  });