import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HyperLink = ({
    label="",
    path=""
}) => {
    const {navigate}=useNavigation()
    const handleNavigation=()=>{
        if(!Boolean(path)) return;
        navigate(path)
    }


  return (
   <Pressable onPress={handleNavigation}>
       <Text style={StyleSheet.text}>{label}</Text>
   </Pressable>
  )
}

export default HyperLink;

const styles=StyleSheet.create({
    text:{
        fontSize:15,
        textAlign:"center"
    }
})