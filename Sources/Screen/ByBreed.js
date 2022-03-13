import { View, Text, Alert,StyleSheet, ActivityIndicator, FlatList ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getByBreed } from '../Network/APIcalls'

const ByBreed = (props) => {
  const [dogList,setDogList]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    getDogData();
  },[])

  const getDogData=async ()=>{
    setLoading(true)
    const res=await getByBreed(30)
    if(res.status=='success'){
      setDogList(res.message);
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
              <View style={styles.imageCard}>
                <Image
                source={{uri:item}}
                style={styles.image}
                />
              </View>
            )}
            keyExtractor={item=>item.toString()}
            numColumns={2}
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
  imageCard:{
    marginVertical:5,
    marginHorizontal:5
  },
  image:{
    height:100,
    width:180,
  }

})
export default ByBreed