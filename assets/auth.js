const admin = require('firebase-admin');
const functions = require('firebase-functions');
const {FirebaseConfigs} = require('../configs/circle');
const React = require('react');
const ReactDOM = require('react-dom');
firebase.initializeApp(FirebaseConfigs);

// admin.initializeApp(functions.config().firebase);
//
// var db = admin.firestore();

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
firestore.enablePersistence();

console.log("DB", firestore);
console.log('_________________________________');




// firebase.firestore().enablePersistence()
//     .then(function() {
//         // Initialize Cloud Firestore through firebase
//         var db = firebase.firestore();
//     })
//     .catch(function(err) {
//         if (err.code == 'failed-precondition') {
//             // Multiple tabs open, persistence can only be enabled
//             // in one tab at a a time.
//             // ...
//         } else if (err.code == 'unimplemented') {
//             // The current browser does not support all of the
//             // features required to enable persistence
//             // ...
//         }
//     });

// db.collection("cities").where("state", "==", "CA")
//     .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
//         snapshot.docChanges().forEach(function(change) {
//             if (change.type === "added") {
//                 console.log("New city: ", change.doc.data());
//             }
//
//             var source = snapshot.metadata.fromCache ? "local cache" : "server";
//             console.log("Data came from " + source);
//         });
//     });

if (!firebase.auth().currentUser) {
    firebase.auth().signInWithEmailAndPassword("k44a5asi@gmail.com", "Huy12091994a@")
}

firebase.auth().onAuthStateChanged(user => {
    console.log("user:", user);
});


var myConnectionsRef = firebase.database().ref('users/joe/connections');

// stores the timestamp of my last disconnect (the last time I was seen online)
var lastOnlineRef = firebase.database().ref('users/joe/lastOnline');

var connectedRef = firebase.database().ref('.info/connected');
connectedRef.on('value', function(snap) {
    if (snap.val() === true) {
        // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
        var con = myConnectionsRef.push();

        // When I disconnect, remove this device
        con.onDisconnect().remove();

        // Add this device to my connections list
        // this value could contain info about the device or a timestamp too
        con.set(true);

        // When I disconnect, update the last time I was seen online
        lastOnlineRef.onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);
    }
});

// var myDataRef = firebase.database().ref('/bitcoin');

// var newStoreRef = myDataRef.push({
//     "dogecoin": 123
// });
// // newStoreRef.set({
// //     "dogecoin": 123
// // });
// myDataRef.on('child_changed', function (snapshot) {
//     var message = snapshot.val();
//     console.log("child change",message);
// });
//
// myDataRef.on('child_added', function (snapshot) {
//     var message = snapshot.val();
//     console.log("child add",message);
// });


