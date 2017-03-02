function writeUserData() {
      var vendorIn;
      var whenIn;
      var timeIn;
      var descIn;
      var idIn;
      var locationIn;

	x = document.getElementById("submitForm");
	for( i = 0; i < x.length; i++){
    	if(i == 0)
   			vendorIn = x.elements[i].value;
    	else if(i == 1)
       		idIn = x.elements[i].value;
    	else if(i == 2)
       		locationIn = x.elements[i].value;
    	else if(i == 3)
       		whenIn= x.elements[i].value;
    	else if(i == 4)
       		timeIn = x.elements[i].value;
    	else if(i == 5)
       		descIn = x.elements[i].value;
  	}

  	console.log(vendorIn)
   	database.ref('niner-demo/').child('Events/'+(localStorage.getItem("numchildren"))).set({
    	vendor: vendorIn,
    	when: whenIn,
    	time: timeIn,
    	desc:descIn,
    	id:idIn,
    	location:locationIn
   	});
}