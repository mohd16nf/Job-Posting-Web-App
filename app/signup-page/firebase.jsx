import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyASeUzrHjvUJJjbRBAdjtDzaigvKXF5zAU",
    authDomain: "project-with-firebase-390d5.firebaseapp.com",
    databaseURL: "https://project-with-firebase-390d5-default-rtdb.firebaseio.com",
    projectId: "project-with-firebase-390d5",
    storageBucket: "project-with-firebase-390d5.appspot.com",
    messagingSenderId: "419812592047",
    appId: "1:419812592047:web:b2f1375831d562c6aac75a",
    databaseURL: 'https://project-with-firebase-390d5-default-rtdb.firebaseio.com/'
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export default app;
  export { auth };