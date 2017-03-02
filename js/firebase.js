	// Initialize Firebase
  	// TODO: Replace with your project's customized code snippet
  	var config = {
    	apiKey: "AIzaSyDGzmVSGmK_DgnWJy3Y4_Qe1Qa3rlYbmQc",
    	authDomain: " niner-demo.firebaseapp.com",
    	databaseURL: "https://niner-demo.firebaseio.com",
    	//storageBucket: "<BUCKET>.appspot.com",
    	//messagingSenderId: "<SENDER_ID>",
  	};
  	firebase.initializeApp(config);

 	var database = firebase.database();
 	var eventRefs = database.ref('niner-demo/').child('Events/');
 	var sizeOfDatabase = 0;
 	// var eventRef = eventRefs.push();
  	//console.log("user key", eventRef.key);
 
	eventRefs.on("value", function(snapshot) {
  	console.log("There are "+snapshot.numChildren()+" messages");
  	sizeOfDatabase = snapshot.numChildren();
  	console.log(sizeOfDatabase);
  	localStorage.numchildren = sizeOfDatabase;
	});


	//writeUserData("USA","800821222","msalad1","11/11/2017","3:00PM - 7:00PM","dsadasdsdd");
	var x = document.getElementById("submitForm");
	var host = document.getElementById("fname").value;
	//console.log("Host name is " +x.elements[0])
	console.log(localStorage.getItem("lastname") + " Should not be undefined");