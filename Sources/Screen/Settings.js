import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {SessionManager} from '../../Models/Sessions/SessionManager';
import {UserSession} from '../../Models/Sessions/UserSession'
import {useDispatch} from 'react-redux';
import {AppActions} from '../Redux/Actions/AppActions';

const Settings = props => {
  const [user, setUser] = useState({email: '', password: ''});
  const [email, setEmail] = useState({email: '', password: ''});
  const [password, setPassword] = useState({email: '', password: ''});

  const dispatch = useDispatch();

  // const logout = () => {
  //   dispatch({type: AppActions.LOGOUT});
  //   props.navigation.reset({
  //     index: 0,
  //     routes: [{name: 'login'}],
  //   });
  // };

  // const data=UserSession.getUserLoggedIn()
  // data.then((res)=>{setUser({
  //   email:res.email,
  //   password:res.password
  // })})

  const changeEmail = () => {
    UserSession.setUserLoggedIn({email: email, password: user.password});
  };
  const changePassword = () => {
    UserSession.setUserLoggedIn({email: user.email, password: password});
  };

  const handleLogout=()=>{
    SessionManager.clear();
    props.navigation.reset({
      index:0,
      routes:[{name:"Login"}]
    })
  }
  const image = {
    uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg',
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
      imageStyle={{opacity: 0.9}}>
      <View>
        
        <Text>Settings</Text>
        <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.btnLabel}>Logout</Text>
      </Pressable>

        {/* <Pressable style={styles.button} onPress={logout}>
          <Text style={styles.btnLabel}>Logout</Text>
        </Pressable> */}

        <TextInput style={styles.email} onChangeText={setEmail} />

        <Button
          title="change email"
          onPress={changeEmail}
          style={styles.button2}
        />

        <View>
          <Text>{user.email}</Text>
          <Text>{user.password}</Text>

          <TextInput style={styles.email} onChangeText={setPassword} />
          <Button
            title="change password"
            onPress={changePassword}
            style={styles.button2}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1261C0',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  btnLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    margin: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  button2: {
    height: 350,
    width: 70,
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
});
