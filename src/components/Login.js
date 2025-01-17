import React, {  useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
  // const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isSignInForm, setIsSignInForm]=useState(true);

  const [errorMessage, setErrorMessage]=useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
    const message=checkValidData(email.current.value, password.current.value);
    
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      //sign up form
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value )
      .then((userCredential) => {

      // Signed up 
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName:name.current.value , photoURL: "https://assets.leetcode.com/users/Karthikeya_06/avatar_1733218757.png"
      }).then(() => {
        const {uid,
           email, 
           displayName,
           photoURL} = user.uid;
        dispatch(addUser({uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL}))
        // navigate("/browse");
        // Profile updated!
        // ...
      }).catch((error) => {
        setErrorMessage(error.message);
        // An error occurred
        // ...
      });
      
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode,errorMessage);
      // ..
    });
    }
    else{

      //sign in form
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode,errorMessage);
      });


    }

    
  }
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className=' absolute bg-inherit'>
      <img  className='' src={BG_URL}
      alt='bg'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 py-59 text-white bg-opacity-70 ' >
        <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? "  Sign In" : "Sign Up" }</h1>
        {!isSignInForm && 
        <input type='text' 
        placeholder='Full Name' 
        className='p-4 my-2 w-full bg-zinc-900 border border-neutral-600'
        />}
        <input
        ref={email} 
        type='text' 
        placeholder='Email or Phone Number' 
        className='p-4 my-2 w-full bg-zinc-900 border border-neutral-600'
        />
        <input
        ref={password} 
        type='password'
         placeholder='Password'
         className='p-4 my-2 w-full bg-zinc-900 border border-neutral-600'
         />
         {!isSignInForm && 
        <input type='text' 
        placeholder='Re-Enter Password' 
        className='p-4 my-2 w-full bg-zinc-900 border border-neutral-600'
        />}
        <p className=' text-red-600 py-4 font-semibold text-m'>{errorMessage}</p>

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer'onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix Sign Up" : "Already a user Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
