import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import { getRegisterDate } from "../utils/utils";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeEvent(idSession, idEvent, event) {
  
  update(ref(database, "visits/"+idSession+"/events/"+idEvent), {
    date: getRegisterDate(),
    track: event,
  })
    .then(() => {
      console.log("event add");
    })
    .catch((error) => {
      console.log("event failed");
    });
}

// Exporta los servicios para usarlos en otras partes de la aplicación
export { app, database, ref, onValue, set, update, writeEvent };
