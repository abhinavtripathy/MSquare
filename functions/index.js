const functions = require('firebase-functions');

const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.myFunctionName = functions.firestore
  .document('location/twilio').onWrite((change, context) => {
    client.messages
      .create({
        body: 'A crime has occurred in the NYU Tandon School of Engneering! Please be aware of possible dangers!',
        from: '',
        to: ''
      });

    client.messages
      .create({
        body: 'A crime has occurred in the NYU Tandon School of Engneering! Please be aware of possible dangers!',
        from: '+',
        to: ''
      });

    client.messages
      .create({
        body: 'A crime has occurred in the NYU Tandon School of Engneering! Please be aware of possible dangers!',
        from: '',
        to: ''
      });

    //.then(message => console.log(message.sid));
  });