import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Main from '../Sources/View/Main';
import Home from '../Sources/Screen/Home';
import Profile from "../Sources/Screen/Profile"
import About from '../Sources/Component/About';
import TabNavigation from './TabNavigation';
import SignUp from '../Sources/Component/SignUp';
import Login from '../Sources/Screen/Login';

import FormikExample from '../Sources/Screen/FormikExample'
import Splash from '../Sources/Screen/Splash';
import COLORS from '../Sources/Const/Colors';
import { StatusBar } from 'react-native';
import OnBoardScreen from '../Sources/Screen/OnBoardScreen';
import DetailsScreen from '../Sources/Screen/DetailsScreen';
import Cart from '../Sources/Screen/Cart';
import RandomDogImage from '../Sources/Screen/RandomDogImage';
import ListAllBreeds from '../Sources/Screen/ListAllBreeds';
import BySubBreed from '../Sources/Screen/BySubBreed';
import ByBreed from '../Sources/Screen/ByBreed';
import BrowseDogList from '../Sources/Screen/BrowseDogList';

const Stack = createNativeStackNavigator();


const StackNavigation=()=>(
<NavigationContainer>

      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='OnBoardScreen' >
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{headerShown:false}} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name='TabFlow' component={TabNavigation} options={{headerShown:false}}/>
      <Stack.Screen name='RandomDogImage' component={RandomDogImage} options={{headerShown:false}}/>
      <Stack.Screen name='ListAllBreeds' component={ListAllBreeds} options={{headerShown:false}}/>
      <Stack.Screen name='BySubBreed' component={BySubBreed} options={{headerShown:false}}/>
      <Stack.Screen name='ByBreed' component={ByBreed} options={{headerShown:false}}/>
      <Stack.Screen name='BrowseDogList' component={BrowseDogList} options={{headerShown:false}}/>





      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} /> */}
      {/* <Stack.Navigator initialRouteName='Splash'> */}
      {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="Login" component={Login} options={{title:'User Login'}} /> */}
      {/* <Stack.Screen name="FormikExample" component={FormikExample} options={{title:'Create Account'}} /> */}
      {/* <Stack.Screen name="Main" component={Main}  /> */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="About" component={About} /> */}
      </Stack.Navigator>
    </NavigationContainer> 
 );
export default StackNavigation;