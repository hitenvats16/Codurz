import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addSubscriberToList(email,name){
    if(email==='' || email===null || name==='' || name===null){
        return 400;
    }

    await addDoc(collection(db,'List'),{
        name: name,
        email: email
    })
    
    return 200;
}

export { addSubscriberToList }