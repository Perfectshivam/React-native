import { View, Text, Pressable, FlatList,StyleSheet } from 'react-native'
import React from 'react'

const Images = ({navigation}) => {
   
    const browseBreedList=()=>{}
  return (
    <View style={styles.button} >
        {/* <FlatList> */}
          <Pressable  onPress={()=>{navigation.navigate('ListAllBreeds')}}>
          <Text style={styles.btnLabel}>List all breeds</Text>
          </Pressable>
          <Pressable onPress={()=>{navigation.navigate('RandomDogImage')}}>
          <Text style={styles.btnLabel}>Random Image</Text>
          </Pressable>

          <Pressable  onPress={()=>{navigation.navigate('ByBreed')}}>
          <Text style={styles.btnLabel}>By Breed</Text>
          </Pressable>
          <Pressable  onPress={()=>{navigation.navigate('BySubBreed')}}>
          <Text style={styles.btnLabel}>By-Sub-Breed</Text>
          </Pressable>
          <Pressable onPress={browseBreedList}>
          <Text style={styles.btnLabel} onPress={()=>{navigation.navigate('BrowseDogList')}}>Browse Breed List</Text>
          </Pressable>
          {/* </FlatList> */}
    </View>
  )
}
const styles=StyleSheet.create({
  button: {
    backgroundColor: '#F0A500',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 8,
    height:400,
    flex:1
  },
  btnLabel: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginVertical:10,
   padding:10
  },
})
export default Images