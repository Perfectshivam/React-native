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
} from '../../Models/LoginValidationModel'
import ErrorMessage from '../View/ErrorMessage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FormikExample = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumber = useRef(null);
  const confirmPasswordRef = useRef(null);

  const submitForm = values => {
    console.log('chal ja bhai -.- ');
    console.log(values);
  };
  //using show hide in password
  const [showPassword, setShowPassword] = useState(true);
const image={uri:"https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"};


  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle= {{opacity:0.9}} >

    <View style={styles.parent}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Text style={styles.btnLabel}>Sign Up</Text>
          <View style={styles.form}>
            <Formik
              initialValues={LoginInitialValues}
              validationSchema={LoginValidationModel}
              validateOnMount
              onSubmit={values => submitForm(values)}>
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
                      touched.firstName &&
                        errors.firstName &&
                        styles.errorInput,
                    ]}
                    label="First Name"
                    labelTextColor="#ccc"
                    placeholder="Enter first name"
                    placeholderTextColor="#ccc"
                    autoCapitalize="characters"
                    autoComplete="off"
                    keyboardType="default"
                    returnKeyType="next"
                    textContentType="name"
                    innerRef={firstNameRef}
                    autoFocus
                    onSubmitEditing={() => nameRef.current.focus()}
                    onChangeText={handleChange('firstName')}
                    value={values.firstName}
                    onBlur={handleBlur('firstName')}
                  />
                  <ErrorMessage
                    errors={errors}
                    touched={touched}
                    inputKey="firstName"
                  />

                  <Field
                    component={TextInput}
                    style={[
                      styles.Text1,
                      touched.lastName && errors.lastName && styles.errorInput,
                    ]}
                    placeholder="Last Name"
                    placeholderTextColor="#ccc"
                    autoCapitalize="characters"
                    autoComplete="off"
                    keyboardType="default"
                    returnKeyType="next"
                    textContentType="middleName"
                    innerRef={lastNameRef}
                    onSubmitEditing={() => lastNameRef.current.focus()}
                    onChangeText={handleChange('lastName')}
                    value={values.lastName}
                    onBlur={handleBlur('lastName')}
                  />
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    inputKey="lastName"
                  />

                  <Field
                    component={TextInput}
                    style={[
                      styles.Text1,
                      touched.phoneNumber &&
                        errors.phoneNumber &&
                        styles.errorInput,
                    ]}
                    placeholder="Phone Number"
                    placeholderTextColor="#ccc"
                    autoCapitalize="none"
                    autoComplete="off"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    textContentType="postalCode"
                    maxLength={10}
                    innerRef={phoneNumber}
                    onSubmitEditing={submitForm}
                    onChangeText={handleChange('phoneNumber')}
                    value={values.phoneNumber}
                    onBlur={handleBlur('phoneNumber')}
                  />
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    inputKey="phoneNumber"
                  />

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
                      onSubmitEditing={() => Keyboard.dismiss()}
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
                   <View style={[styles.passwordWrapper]}>
                    <Field
                      component={TextInput}
                      style={[
                        styles.Text2,
                        touched.confirmPassword &&
                          errors.confirmPassword &&
                          styles.errorInput,
                      ]}
                      placeholder="Confirm your Password"
                      placeholderTextColor="#ccc"
                      autoCapitalize="none"
                      autoComplete="off"
                      keyboardType="default"
                      returnKeyType="done"
                      textContentType="password"
                      innerRef={confirmPasswordRef}
                      onSubmitEditing={() => Keyboard.dismiss()}
                      onChangeText={handleChange('confirmPassword')}
                      secureTextEntry={showPassword ? true : false}
                      value={values.confirmPassword}
                      onBlur={handleBlur('confirmPassword')}
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
                  {/* <Field
         component={TextInput}
         style={[styles.Text1,touched.confirmPassword && errors.confirmPassword  && styles.errorInput]}
         placeholder="Confirm your Password"
         placeholderTextColor='#ccc'
         autoCapitalize='none'
         autoComplete='off'
         keyboardType='default'
         returnKeyType='done'
         textContentType='password'
         innerRef={confirmPasswordRef}
         onSubmitEditing={()=>Keyboard.dismiss()}
         onChangeText={handleChange('confirmPassword')}
         secureTextEntry
         value={values.confirmPassword}
         onBlur={handleBlur('confirmPassword')}
        />
                  <ErrorMessage touched={touched} errors={errors} inputKey="confirmPassword" /> */}

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

export default FormikExample;
