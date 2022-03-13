import { View, Text,StyleSheet,ScrollView,Image,Pressable, ActionSheetIOS } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../Const/Colors';
import { useDispatch } from 'react-redux';
import { CartActions } from '../Redux/Actions/CartActions';
const DetailsScreen = ({navigation,route}) => {
  const item = route.params;
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch({type:CartActions.INCREASE,data:item}),
    navigation.navigate('Cart');
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Icon name='arrow-back-ios' size={30} onPress={navigation.goBack} />
        <Text style={styles.headerText}>{item.name}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name} 
            </Text>
            <Text  style={{fontSize: 25, fontWeight: 'bold',paddingEnd:140, color: COLORS.white}}>₹{item.price}</Text>
            </View>
            <Text style={styles.detailsText}>
            food, substance consisting essentially of protein, carbohydrate, fat,
             and other nutrients used in the body of an organism to sustain growth
              and vital processes and to furnish energy. The absorption and utilization
               of food by the body is fundamental to nutrition and is facilitated by digestion.
            </Text>
            <View style={{marginTop: 40, marginBottom: 40}}>
            <Pressable style={styles.btnContainer} onPress={addToCart}>
            <Text style={styles.btnText}>Add to Cart</Text>
            </Pressable>
          </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default DetailsScreen;

const styles=StyleSheet.create({
safeArea:{
  backgroundColor:COLORS.white
},
header:{
  paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
},
headerText:{
  fontSize:20,
  fontWeight:'bold'
},
details: {
  paddingHorizontal: 20,
  paddingTop: 40,
  paddingBottom: 60,
  backgroundColor: COLORS.primary,
  borderTopRightRadius: 40,
  borderTopLeftRadius: 40,
},
detailsText: {
  marginTop: 10,
  lineHeight: 22,
  fontSize: 16,
  color: COLORS.white,
},
btnContainer:{
  backgroundColor:COLORS.white,
  height:60,
  borderRadius:30,
  justifyContent:'center',
  alignItems:'center',
  marginBottom:20
},
btnText:{
  fontSize:18,
  fontWeight:'bold',
  color:COLORS.primary, 
}
})