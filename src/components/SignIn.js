import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import Cookies from 'universal-cookie/es6';

const SignIn = () => {
    const provider = new GoogleAuthProvider();
    const provider1 = new FacebookAuthProvider();
    const [user, setuser] = useState();
    const [text, settext] = useState("Sign In");
    const cookies = new Cookies();
   const signInWithFacebook= () => {
    signInWithPopup(auth, provider1)
    .then((result) => {
        console.log(result);
      setuser(result.data);
        const credential = FacebookAuthProvider.credentialFromResult(result);
        
    const accessToken = credential.accessToken;
    cookies.set('Token', accessToken, { path: '/' });
  
    })
    .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.email;
    //   const credential = FacebookAuthProvider.credentialFromError(error);
  
    //   ...
    });
  
   }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(credential);
                console.log(result);
                const token = credential.accessToken;
                cookies.set('Token', token, { path: '/' });
                settext("Welcome "+result.user.displayName); 
                setuser(result.user.photoURL);

            }).catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // const email = error.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    return (
        <>
            <Button variant="contained" onClick={signInWithGoogle} >{text}</Button>
            <Button variant="contained" onClick={signInWithFacebook} >{text}</Button>

            <div class="card text-start|center|end">
              <img class="card-img-top" src={user} alt=""/>
              <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Body</p>
              </div>
            </div>
        </>
    )
}
export default SignIn;
