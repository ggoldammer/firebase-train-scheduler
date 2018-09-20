// Initialize Firebase
var config = {
    apiKey: "AIzaSyAF3Kf-sp4545COnIcXLYT33dXeBQEXGrQ",
    authDomain: "train-scheduler-5bbe6.firebaseapp.com",
    databaseURL: "https://train-scheduler-5bbe6.firebaseio.com",
    projectId: "train-scheduler-5bbe6",
    storageBucket: "train-scheduler-5bbe6.appspot.com",
    messagingSenderId: "923122634444"
};
firebase.initializeApp(config);

var trainName = "";
var trainDestination = "";
var trainTime = "";
var trainFrequency = "";
var dataRef = firebase.database();

//   I need  to save Input information to the databse
$("#add-train").on("click", function (event) {
    event.preventDefault();

    trainName = $("#train-name").val().trim();
    trainDestination = $("#train-destination").val().trim();
    trainTime = $("#train-time").val().trim();
    trainFrequency = $("#train-frequency").val().trim();


    dataRef.ref().push({
        "train-name": trainName,
        "train-destination": trainDestination,
        "train-time": trainTime,
        "train-frequency": trainFrequency
    });
});

// I need to display recent input to the Current Train Schedule

dataRef.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().trainDestination);
    console.log(childSnapshot.val().trainTime);
    console.log(childSnapshot.val().trainFrequency);

    $("#train-data").append("<tr><td>"+ trainName +"</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + trainTime + "</td><td>minutes away</td></tr>");

});