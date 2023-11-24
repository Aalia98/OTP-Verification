import { View } from 'react-native';
import React, {useState, useEffect} from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { firebase } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {
  const [user, setUser] = useState();

  const onAuthStateSave = (user: any) => setUser(user);
  const isAuthenticated = async () => {
    const isLoggedIn = await AsyncStorage.getItem('is_logged_in');
    console.log("isllogedin", isLoggedIn)
  }
  isAuthenticated()
  

  useEffect(() => {
    const otpVerified = firebase.auth().onAuthStateChanged(onAuthStateSave);
    return otpVerified;
  }, [])

  // return
  return (
    <View>
      {isAuthenticated ? <Home/> : <Login/>}
      {/* <Login/> */}
    </View>
  )
}

export default App