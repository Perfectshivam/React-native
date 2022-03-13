import { View, Text,Button } from 'react-native'
import React from 'react'

const Main=(props)=> {
    const navigateToHome =()=>
    {
         props.navigation.navigate("Home")
    }
    const navigateToProfile =()=>
    {
         props.navigation.navigate("Profile")

    }
    const navigateToAbout =()=>
    {
         props.navigation.navigate("About")

    }
    const navigateToSignUp=()=>
    {
      props.navigation.navigate("SignUp")
    }
    const navigateToFormik=()=>
    {
      console.log("hi")
      props.navigation.navigate("FormikExample")
    }
  return (
    <View>
      <Button title='Go to Home' onPress={navigateToHome}   />
      <Button title='Go to Profile' onPress={navigateToProfile}   />
      <Button title='Go to About' onPress={navigateToAbout}   />
      <Button title='Go to SignUp' onPress={navigateToSignUp}   />
      <Button title='Go to Formik SignUp' onPress={navigateToFormik} />


    </View>
  )
}
export default Main;