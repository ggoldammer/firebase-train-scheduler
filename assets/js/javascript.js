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
var now = moment().format("HH:mm");
var nextArrival;


//   I need  to save Input information to the databse
$("#add-train").on("click", function (event) {
    event.preventDefault();

    trainName = $("#train-name").val().trim();
    trainDestination = $("#train-destination").val().trim();
    trainTime = $("#train-time").val().trim();
    moment(trainTime, "HH:mm");
    trainFrequency = $("#train-frequency").val().trim();
    moment(trainFrequency, "mm");

    dataRef.ref().push({
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency
    });
});

// I need to display recent input to the Current Train Schedule

dataRef.ref().on("child_added", function (snapshot) {
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().time);
    console.log(snapshot.val().frequency);
    console.log("Next Arrival:" + nextArrival);

    $("#train-data").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().time + "</td><td>Work in Progress!</td><td>Work in Progress!</td></tr>");

});