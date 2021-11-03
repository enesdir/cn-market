import { getApps, initializeApp, FirebaseOptions } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY || 'development',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'localhost',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'cnmarket-379a2',
};

const apps = getApps();

const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0];

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
// use emulator if developing locally
if (
  process.env.NODE_ENV === 'development' &&
  process.env.NEXT_PUBLIC_TEST_AGAINST_PROD !== 'true'
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const config = require('../../firebase.json');
  connectFirestoreEmulator(db, 'localhost', config.emulators.firestore.port);
  connectAuthEmulator(auth, `http://localhost:${config.emulators.auth.port}`);
}

export { db, auth, provider };
