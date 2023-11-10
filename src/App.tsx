import { collection } from "firebase/firestore";
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth as firebaseAuth, googleAuthProvider, firestore } from "./services/firebase";
import './App.css'

function App() {
  const [auth] = useAuthState(firebaseAuth);
  const [events, eventsLoading, error] = useCollectionData(collection(firestore, 'events'));

  console.log(events, eventsLoading, error);

  if (!auth) {
    return <button onClick={() => signInWithPopup(firebaseAuth, googleAuthProvider)}>Sign In With Google</button>
  }

  if(!auth?.email?.includes("@parsimotion.com") && !auth?.email?.includes("@producteca.com")) {
    return (
      <div>
        Si no sos de Producteca tomatela
        <button onClick={() => signOut(firebaseAuth)}>Sign Out</button>
      </div>
    )
  }

  return (
    <>
      <button onClick={() => signOut(firebaseAuth)}>Sign Out</button>
      <ul>
        {events?.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
