function writeUserData() {
console.log("data "+document.getElementById("submitForm").getElementsByTagName("fName").value);
   database.ref('niner-demo/').child('Events/'+(localStorage.getItem("numchildren"))).set({
    //console.log(localStorage.getItem("lastname") + " Should not be undefined");
     vendor: document.getElementById("fName"),
     when: document.getElementById("submitForm".elements[3].value),
     time: document.getElementById("submitForm".elements[4].value),
     desc:document.getElementById("submitForm".elements[5].value),
     id:document.getElementById("submitForm".elements[1].value),
     location:document.getElementById("submitForm".elements[2].value),
   });
  
}