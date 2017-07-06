const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.helloTeam = functions.https.onRequest((request, response) => {
    response.send("Hello Gary, Matt, Brian, Emily, Duane, Tolga, and Keith!");
});

// Moderates messages by lowering all uppercase messages and removing swearwords.
exports.vehicleNameValidator = functions.database.ref('/user-vehicles/{uid}/vehicles')
    .onWrite(event => {
        console.log("new vehicle: ", event.data)
    }
    );