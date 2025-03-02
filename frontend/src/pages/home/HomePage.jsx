import React from 'react'
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';

const HomePage = () => {
  const user = false; // get from backend
  return ( 
  <div>
    {user ? <HomeScreen /> : <AuthScreen />}
  </div> 
  )
};

export default HomePage
