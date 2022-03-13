import { View, Text,SafeAreaView,StyleSheet,FlatList,Image,Pressable, ImageBackground} from 'react-native'
import React,{useEffect} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import { useSelector,useDispatch } from 'react-redux';
import { CartActions } from '../Redux/Actions/CartActions';


const Cart = ({navigation}) => {
  const { cartData,totalPrice, idQuantity,totalCount } = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  console.log(idQuantity);
  console.log(totalCount);

  const CartCard = ({item}) => {
    const product = item.item
    return (
      <View style={styles.cartCard}>
        <Image source={product.image} style={styles.cardImage} />
        <View
          style={styles.cardViewIn}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{product.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>₹{product.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{idQuantity[product.id]}</Text>
          {console.log(idQuantity[product.id])}
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} onPress={()=>dispatch({type:CartActions.DECREASE,data:product})} />
            <Icon name="add" size={25} color={COLORS.white} onPress={()=>dispatch({type:CartActions.INCREASE,data:product})} />
          </View>
        </View>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
    {totalCount ? 
    (
      <View>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={cartData}
        renderItem={(item) => <CartCard quantity={idQuantity[item.id]} item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={styles.totalCart}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>₹ {totalPrice}</Text>
            </View>
            <Pressable style={styles.btnContainer} onPress={()=>{console.log('clicked');navigation.navigate('Cart')} }>
            <Text style={styles.btnText}>CheckOut</Text>
        </Pressable> 
          </View>
        )}
      />
      </View>
    ) : (<Image style={styles.image} source={require('../Resources/Images/cart.png')}
    ></Image>)
  }
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: COLORS.white,
     flex: 1
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  headerText:
  {
    fontSize: 20,
     fontWeight: 'bold'
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage:{
    height: 80,
     width: 80,
  },
  cardViewIn:{
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1
  },
  totalCart:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  btnContainer:{
    backgroundColor:COLORS.primary,
    height:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  btnText:{
    fontSize:18,
    fontWeight:'bold',
    color:COLORS.white, 
  },
  
  image:{
    resizeMode: 'contain', 
    height:500,
    width:400,
    marginVertical:20 
},

});


export default  Cart;