import React, { useContext } from 'react';
import firebase from 'firebase/app';
import { auth, firestore } from '../firebase/config';

import Signature from './Signature';

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle} className="btn signin">
        Sign in with Google
      </button>
      <Signature />
    </div>
  );
};

export default SignIn;
