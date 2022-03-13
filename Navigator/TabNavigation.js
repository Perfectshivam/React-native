import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Sources/Screen/Home';
// import Main from '../Sources/View/Main';
import Profile from '../Sources/Screen/Profile';
// import About from '../Sources/Component/About';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Cart from '../Sources/Screen/Cart';
// import OnBoardScreen from '../Sources/Screen/OnBoardScreen';
import Entypo from 'react-native-vector-icons/Entypo'


import Settings from '../Sources/Screen/Settings';
import Images from '../Sources/Screen/Images';

const Tab = createBottomTabNavigator();

const TabNavigation=()=> (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;


          if (route.name === 'Home') {
            iconName = "home"
          } 
          else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }
          else if (route.name === 'Settings') {
            iconName = focused ? 'account-cog' : 'account-cog-outline';
          }
          else if(route.name=='Cart'){
            iconName='cart-outline'
          }
         

          // You can return any component that you like here!
         
          return <MaterialCommunityIcons
          name={iconName} size={size} color={color} />
        },
        headerShown:false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
      {/* <Tab.Screen name="Main" component={Main} /> */}
      {/* <Tab.Screen name='OnBoardScreen' component={OnBoardScreen} /> */}
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='Images' component={Images} options={{ tabBarIcon: ({ color, size }) => (
            <Entypo name="images" color={color} size={size} />
          )}} />
        
        <Tab.Screen name="Profile" component={Profile} />
        {/* <Tab.Screen name="About" component={About} /> */}
        <Tab.Screen name="Settings" component={Settings} />
      
      </Tab.Navigator>
  );

export default TabNavigation;