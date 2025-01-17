import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignOut=()=>{
  signOut(auth)
  .then(() => { 
    navigate("/");
  }).catch((error) => {   
    navigate("/error");
  });
}
const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
const dispatch=useDispatch();
  
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName,photoURL} = user.uid;
      dispatch(addUser({uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL}));
        navigate("/browse");
      // ...
    } else {
      dispatch(removeUser()); 
      navigate("/");
      // User is signed out
      // ...
    }
  });
},[])

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLang=(e)=>{
    dispatch(changeLanguage(e.target.value ));
  }

  return (
    <div className=' absolute w-screen px-8 py-2 bg-gradient-to-b from-stone-900 z-10 flex justify-between' >
      <img className='w-44'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'/>
      
      {user && ( 
      <div className='flex p-2'>
  {showGptSearch&&(
    <select className='py-2 px-4 mx-4 my-2 bg-gray-800 text-white'onChange={handleLang}>
    {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name }</option>)}
      </select>)}
        
        <button className='py-2 px-4 mx-4 my-2 bg-purple-900 text-white rounded-lg'
        onClick={handleGptSearchClick}>
        
        {showGptSearch ? "Home" : "GPT Search"}</button>
        
        <img className ='w-12 h-12  'alt='userIcon' src='https://assets.leetcode.com/users/Karthikeya_06/avatar_1733218757.png'
      />
        <button onClick={handleSignOut}className=' font-bold text-white p-2'>Sign Out</button>
      </div>)}
    </div>
      
  )
}

export default Header
