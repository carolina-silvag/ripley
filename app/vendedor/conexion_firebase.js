// Initialize Firebase
var config = {
  apiKey: "AIzaSyDm66l6GJpdlfMG7tBEq4keemYQ4WcCkJ4",
  authDomain: "innovaton-86d52.firebaseapp.com",
  databaseURL: "https://innovaton-86d52.firebaseio.com",
  projectId: "innovaton-86d52",
  storageBucket: "innovaton-86d52.appspot.com",
  messagingSenderId: "907196788389"
};
firebase.initializeApp(config);
var r = firebase.database();
var ref = r.ref("coordenadas");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(coordenadas) {
  data = coordenadas.val();
  // console.log(data)
  resultado = '';

  for (var i in data) {
    if (data.hasOwnProperty(i)) {
        resultado = data[i];
    }
  }

  changeAngle(resultado);

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});