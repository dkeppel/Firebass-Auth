//TODO - Add you Firebase SDK that you want to use.

//Your web app Firebase Config

const firebaseConfig = {

    apiKey: "AIzaSyBgie2lhr_4I8R_OGj2ARzAbOUmL_oGBTM",
  
    authDomain: "fir-example-b24de.firebaseapp.com",
  
    projectId: "fir-example-b24de",
  
    storageBucket: "fir-example-b24de.appspot.com",
  
    messagingSenderId: "474869536406",
  
    appId: "1:474869536406:web:c8ae96cb5aa038b6e394b7",
  
    measurementId: "G-63261K90V6"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  
  const analytics = getAnalytics(app);