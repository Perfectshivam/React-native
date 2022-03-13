import React from 'react';
import {Text, StyleSheet, View, Image, Button, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../Const/Colors'
import TabNavigation from '../../Navigator/TabNavigation';
// import {PrimaryButton} from '../components/Button';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safearea} >
      <View style={styles.view1}>
        <Image
         style={styles.image}
          source={require('../Resources/Images/bbbb.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title1}>
            Uttam Bhojan
          </Text>
          <Text
            style={styles.title2}>
                Bhook lagi naa?To lijye Humari madad
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        
        <Pressable style={styles.btnContainer} onPress={()=>{console.log('clicked');navigation.navigate('TabFlow')} }>
            <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
  
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safearea:{
        flex: 1, backgroundColor: COLORS.white,
    },
    view1:{
        height: 400
    },

    image:{
        width: '100%',
        resizeMode: 'contain',
        top: -150, 
    },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  title1:{
    fontSize: 32, fontWeight: 'bold', textAlign: 'center'
  },
  title2:{
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.grey,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
  btnContainer:{
      backgroundColor:COLORS.primary,
      height:60,
      borderRadius:30,
      justifyContent:'center',
      alignItems:'center'
  },
  btnText:{
      fontSize:18,
      fontWeight:'bold',
      color:COLORS.white, 
  }
});

export default OnBoardScreen;