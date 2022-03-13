import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import COLORS from '../Const/Colors';
import Foods from '../Const/Foods';
import Icon from 'react-native-vector-icons/Ionicons';
import AddIcon from 'react-native-vector-icons/MaterialIcons';


const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const Home = ({navigation}) => {
  // const {navigation}=route.params.navigation
  const Card = ({food}) => {
    return (
      <View style={styles.cardContainer} >
        <Pressable style={styles.card} onPress={() =>{console.log('details'); navigation.navigate('DetailsScreen',food)}}>
          <Image source={food.image} style={styles.foodImage} />
        </Pressable>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
          <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
            {food.ingredients}
          </Text>
        </View>
        <View style={styles.priceAndAddToCart}>
          <Text style={styles.priceText}>₹ {food.price}</Text>
          <View style={styles.addToCartBtn}>
            <AddIcon name="add" size={20} style={{color:'white'}} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Hello,</Text>
            <Text style={styles.text2}>Shivam</Text>
          </View>
          <Text>What do you wanna eat today ?</Text>
        </View>
        <Image
          style={styles.userImage}
          source={require('../Resources/Images/venom.png')}
        />
      </View>
      <View
        style={styles.aboveInputContainer}>
        <View style={styles.inputContainer}>
          <Icon name="ios-search" size={28} />
          <TextInput
            style={styles.searchBoxText}
            placeholder="Search for food"
          />
        </View>
      </View>
      <FlatList 
      // style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  
  },
  textContainer: {
    flexDirection: 'row',
  },
  text1: {
    fontSize: 28,
  },
  text2: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  aboveInputContainer:{
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom:20,
  },
  searchBoxText:{
    flex: 1,
    fontSize: 18,
  },
  cardContainer: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    flex:1,
  },
  flatlist:{
    flex:1,
  },
  card:{
    alignItems: 'center',
     top: -40
  },
  foodImage:{
    height: 120,
     width: 120
  },
  priceAndAddToCart:{
    flexDirection:'row',
    marginVertical:10,
    marginHorizontal:20,
    justifyContent:'space-between'
  },
  priceText:{
    fontWeight:'bold'
  },
  addToCartBtn:{
    height:30,
    width:30,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.primary,
  }

});
