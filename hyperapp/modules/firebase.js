const extract = require("mention-hashtag");
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCbIw1YxYU3H2pgwn9bM8uMaZRh89qPR28",
  authDomain: "koala-digital.firebaseapp.com",
  databaseURL: "https://koala-digital.firebaseio.com",
  projectId: "koala-digital",
  storageBucket: "koala-digital.appspot.com",
  messagingSenderId: "452575086236"
});

export const db = firebase.firestore();

export function addUser() {
  return db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
}

export function addStory({ title, content }) {
  return db.collection("stories").add({
    title: title,
    content: content,
    tags: extractTags(content)
  });
}

function extractTags(text) {
  return extract(text, "#");
}