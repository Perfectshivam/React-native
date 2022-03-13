import * as Yup from 'yup';
export const LoginValidationModel = Yup.object().shape({
    // firstName: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('Required'),
      
    // lastName: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('Required'),
    //   phoneNumber: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(11, 'Too Long!')
    //   .required('Required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    password:Yup.string().nullable()
    .required('Password is required')
    .matches(
        // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/,
        
        
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contains 8 characters, one Uppercase, one Lowercase,a digit and a special Character'
    ),
   
    
    confirmPassword: Yup.string().when("password", {

      is: value => (value && value.length > 0 ? true : false),
      
      then: Yup.string().oneOf(
      
      [Yup.ref("password")],
      
      "Both password need to be the same")
    }
      )
  });
  export const LoginInitialValues={
      firstName:"",
      lastName:"",
      phoneNumber:"",
      email:"",
      password:"",
      confirmPassword:"",
  }