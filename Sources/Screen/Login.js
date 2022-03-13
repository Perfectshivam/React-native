import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Pressable,
    KeyboardAvoidingView,
    TouchableOpacity,
    ImageBackground,
    Keyboard
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import {Field, Formik} from 'formik';
  import {
    LoginInitialValues,
    LoginValidationModel,
  } from '../../Models/LoginValidationModel';
  import ErrorMessage from '../View/ErrorMessage'
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HyperLink from '../View/HyperLink';
import { UserSession } from '../../Models/Sessions/UserSession';
import { useDispatch } from 'react-redux';
import { AppActions } from '../Redux/Actions/AppActions';
  
  const Login = (props) => {
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const dispatch=useDispatch();
  
    const handleSubmitForm = async (values) => {
        // const res=await UserSession.setUserLoggedIn(values)
        dispatch({type:AppActions.LOGIN,data:values})
        props.navigation.reset({
            index:0,
            routes:[{name:"TabFlow"}]
        })
    };
    //using show hide in password
    const [showPassword, setShowPassword] = useState(true);
  const image={uri:"https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"};
  
  
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle= {{opacity:0.9}}  >
      <View style={styles.parent}>
        <KeyboardAvoidingView>
          <ScrollView>
            <Text style={styles.btnLabel}>Login</Text>
            <View style={styles.form}>
              <Formik
                initialValues={LoginInitialValues}
                validationSchema={LoginValidationModel}
                validateOnMount
                onSubmit={values => handleSubmitForm(values)}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  isValid,
                  errors,
                  touched,
                }) => (
                  <>
                    <Field
                      component={TextInput}
                      style={[
                        styles.Text1,
                        touched.email && errors.email && styles.errorInput,
                      ]}
                      placeholder="Enter your Email"
                      placeholderTextColor="#ccc"
                      autoCapitalize="none"
                      autoComplete="off"
                      keyboardType="email-address"
                      returnKeyType="next"
                      textContentType="emailAddress"
                      innerRef={emailRef}
                      onSubmitEditing={() => passRef.current.focus()}
                      //   autoFocus
                      autoCapitalize="none"
                      onChangeText={handleChange('email')}
                      value={values.email}
                      onBlur={handleBlur('email')}
                    />
                    <ErrorMessage
                      touched={touched}
                      errors={errors}
                      inputKey="email"
                    />
                    <View style={[styles.passwordWrapper]}>
                      <Field
                        component={TextInput}
                        style={[
                          styles.Text2,
                          touched.password &&
                            errors.password &&
                            styles.errorInput,
                        ]}
                        placeholder="Enter your Password"
                        placeholderTextColor="#ccc"
                        autoCapitalize="none"
                        autoComplete="off"
                        keyboardType="default"
                        returnKeyType="done"
                        textContentType="password"
                        innerRef={passRef}
                        onSubmitEditing={handleSubmitForm}
                        onChangeText={handleChange('password')}
                        secureTextEntry={showPassword ? true : false}
                        value={values.password}
                        onBlur={handleBlur('password')}
                      />
                      <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}>
                        <FontAwesome
                          style={styles.passwordToggleIcon}
                          name={showPassword ? 'eye' : 'eye-slash'}
                        />
                      </TouchableOpacity>
                    </View>
                    <ErrorMessage
                      touched={touched}
                      errors={errors}
                      inputKey="password"
                    />
                    <Pressable
                      style={[styles.button, !isValid && styles.disabledButton]}
                      disbled={!isValid}
                      onPress={handleSubmit}>
                      <Text style={styles.btnLabel}>Login</Text>
                    </Pressable>
                  </>
                )}
              </Formik>
            </View>
            <HyperLink path='FormikExample' label='Create New Account' />

          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      </ImageBackground>

    );
  };
  
  const styles = StyleSheet.create({
    parent: {
      flex: 1,
      padding: 16,
    },
    form: {
      marginVertical: 20,
    },
    Text1: {
      height: 40,
      // margin: 12,
      padding: 10,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      fontSize: 16,
      borderRadius: 4,
      marginBottom: 2,
      marginTop: 16,
      flex: 1,
    },
    Text2: {
      height: 40,
      margin: 0,
  
      padding: 10,
      backgroundColor: '#fff',
      fontSize: 16,
      // marginBottom:2,
      // marginTop:16 ,
      flex: 1,
    },
    errorInput: {
      borderColor: 'red',
      color: 'red',
    },
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
    disabledButton: {
      backgroundColor: '#ccc',
    },
    passwordWrapper: {
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      borderRadius: 4,
      borderColor: '#ccc',
      borderWidth: 1,
      // borderWidth: 1,
    },
    passwordInput: {
      flex: 1,
      marginBottom: 0,
    },
    eyeIcon: {
      paddingHorizontal: 10,
    },
    passwordToggleIcon: {
      fontSize: 20,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
  });
  
  export default Login;
  