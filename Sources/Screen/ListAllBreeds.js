import { View, Text, Alert,StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getListAllBreeds } from '../Network/APIcalls'

const ListAllBreeds = (props) => {
  const [dogList,setDogList]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    getDogData();
  },[])

  const getDogData=async ()=>{
    setLoading(true)
    const res=await getListAllBreeds()
    if(res.status=='success'){
      setDogList(res.message);
      console.log(res)
    }
    else{
      Alert.alert(
        "Error",
        "Unable to fetch any dog Image",
        [
          {text:'Okay'},
          {text:'Retry',onPress:()=>getDogData()},
        ],
        {
          cancelable:false
        },
      )
    }
    setLoading(false)
  }
  return (
    <View style={styles.wrapper}>
      {
      loading &&(
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} />
          </View>
      )
      }
      {
        !loading && dogList.length>0 &&(
          <React.Fragment>
            <FlatList
            data={dogList}
            renderItem={({item,index})=>(
              <View style={styles.button}>
                <Text style={styles.btnLabel}>{item}</Text>
              </View>
            )}
            keyExtractor={item=>item.toString()}
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            />
          </React.Fragment>
        )
      }
      </View>
  )
}
const styles=StyleSheet.create({
  wrapper:{
    padding:16,
    flex:1
  },
  loadingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center', 
  },
 
  button: {
    backgroundColor: '#F0A500',
    margin: 10,
    paddingVertical: 5,
    borderRadius: 8,
    height:60,
    width:280,
    flex:1
  },
  btnLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginVertical:10,
    marginHorizontal:16,
    textAlign:'center'
  },

})
export default ListAllBreeds