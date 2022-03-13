import {Text,StyleSheet } from 'react-native'
import React from 'react'

const ErrorMessage = ({errors,touched,inputKey}) => {
if(!touched[inputKey]) return null;
  return <Text style={StyleSheet.label}>{errors[inputKey]}</Text>
}

export default ErrorMessage;
const styles=StyleSheet.create({
    label:{
        color:'red',
        fontSize:'15',
    },
})