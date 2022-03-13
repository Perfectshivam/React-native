import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import {UserSession} from "./Models/Sessions/UserSession";
import { useSelector } from 'react-redux';

export default function Profile() {
const {userInfo}=useSelector(store=>store.app)

  // const [user,setUser]=useState({email:'',password:''})
  // const data=UserSession.getUserLoggedIn()
  // data.then((res)=>{setUser({
  //   email:res.email,
  //   password:res.password
  // })})
  const image={uri:"https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"};

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle= {{opacity:0.9}} >
    <View style={styles.data}>
      {/* <Text style={styles.text} >{user.email}</Text>
      <Text style={styles.text}>{user.password}</Text> */}
      <Text>Email:{userInfo.email}</Text>
      <Text>Password:{userInfo.password}</Text>
    </View>
    </ImageBackground >
  )
}
const styles=StyleSheet.create({
 
  text:{
    fontSize:25,
  },
  image:{
    flex:1,
    // justifyContent: "center"

  }
})