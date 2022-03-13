import { View, Text, TextInput,StyleSheet, Pressable,ScrollView, Keyboard } from 'react-native'
import React ,{useRef,useState} from 'react'

const SignUp = () => {
    const emailRef=useRef(null);
    const passRef=useRef(null);
    const nameRef=useRef(null);
    const lastNameRef=useRef(null);


    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setName]=useState('');
    const[lastName,setLastName]=useState('');
    const[phoneNum,setPhoneNum]=useState('');

    
    //validation
    const[isValidEmail,setIsValidEmail]=useState(true);
    const[isValidName,setIsValidName]=useState(true);

   

    const submitForm=()=>{
        setIsValidEmail(true)
        setIsValidName(true);
        setIsValidName(name.includes(' /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])'));
        setIsValidEmail(email.includes('@'));
        alert(name+lastName+email+pass);
    }


  return (
    <View style={styles.parent}>
        <ScrollView>
        <Text style={styles.btnLabel}>Sign Up</Text>
        <View style={styles.form}>
        <TextInput
      style={[styles.Text1, !isValidEmail && styles.errorInput]}
      placeholder="First Name"
      placeholderTextColor='#ccc'
      autoCapitalize='characters'
      autoComplete='off'
      keyboardType='default'
      returnKeyType='next'
      textContentType='name'
      ref={nameRef}
      autoFocus
      onSubmitEditing={()=>nameRef.current.focus()}
      onChangeText={text=>setName(text)}
      />
         <TextInput
      style={styles.Text1}
      placeholder="Last Name"
      placeholderTextColor='#ccc'
      autoCapitalize='characters'
      autoComplete='off'
      keyboardType='default'
      returnKeyType='next'
      textContentType='middleName'
      ref={lastNameRef}
      onSubmitEditing={()=>lastNameRef.current.focus()}
      onChangeText={text=>setLastName(text)}
      />
         <TextInput
      style={styles.Text1}
      placeholder="Phone Number"
      placeholderTextColor='#ccc'
      autoCapitalize="none"
      autoComplete='off'
      keyboardType='phone-pad'
      returnKeyType='next'
      textContentType='postalCode'
      maxLength={10}
    //   ref={lastNameRef}
      onSubmitEditing={submitForm}
      onChangeText={text=>setPhoneNum(text)}
      />
      <TextInput
      style={[styles.Text1, !isValidEmail && styles.errorInput]}
      placeholder="Enter your Email"
      placeholderTextColor='#ccc'
      autoCapitalize='none'
      autoComplete='off'
      keyboardType='email-address'
      returnKeyType='next'
      textContentType='emailAddress'
      ref={emailRef}
      onSubmitEditing={()=>passRef.current.focus()}
    //   autoFocus
      autoCapitalize='none'
      onChangeText={text=>setEmail(text)}
   
      />
       <TextInput
      style={styles.Text1}
      placeholder="Enter your Password"
      placeholderTextColor='#ccc'
      autoCapitalize='none'
      autoComplete='off'
      keyboardType='default'
      returnKeyType='done'
      textContentType='password'
      ref={passRef}
      onSubmitEditing={()=>Keyboard.dismiss()}
      onChangeText={text=>setPass(text)}
      secureTextEntry
      maxLength={6}
      />
      <Pressable style={styles.button} onPress={submitForm}>
          <Text style={styles.btnLabel}>Login</Text>
      </Pressable>
      </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    parent:{
        flex:1,
        padding:16
    },
    form:{
        marginVertical:20,
    },
    Text1:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#ccc',
        backgroundColor:"#fff",
        fontSize:16,
        borderRadius:4,
        marginBottom:16,      
           
    },
    errorInput:{
    borderColor:'red',
        color:'red'
    },
    button:{
        backgroundColor:'#1261C0',
        margin:20,
        paddingVertical:15,
        borderRadius:8

    },
    btnLabel:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'#CCC'
    },
})

export default SignUp;