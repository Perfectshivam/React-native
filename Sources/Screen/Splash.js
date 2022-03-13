import { ImageBackground,Dimensions,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { UserSession } from '../../Models/Sessions/UserSession';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../Redux/Actions/AppActions';


const {width,height}=Dimensions.get('screen');
const Splash = props => {
const [loading,setLoading]=useState(true);
const {userInfo}=useSelector(store=>store.app)
const dispatch=useDispatch()

React.useEffect(()=>
{
    checkUserSession() 
},[]);
const checkUserSession=async()=>
{
    const isLogged=Object.keys(userInfo).length>0
    if(isLogged)
    {
        handleNavigation("TabFlow")
    }
    else{
        handleNavigation("Login")
    }
};
const handleNavigation= name =>{
    props.navigation.reset({
        index:0,
        routes:[{name}],
    });
};



  return (
   <ImageBackground
    source={require("../Resources/Images/splash.jpg")}
    style={{
        height,
        width
    }}>
<ActivityIndicator size="large" color="#CCC" />
    </ImageBackground>
  )
}

export default Splash