import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    app.analytics();
    this.app = app;
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
    this.analytics = app.analytics();
  }
}

const firebase = new Firebase();

export default firebase;
