import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react';
import CustomButton from '../components/Custombutton/CustomButton';
import CustomInput from '../components/Custominput/CustomInput';
import CustomSocials from '../components/Customsocials/CustomSocials';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Create Account</Text>
    <CustomInput 
    labelValue={email}
    onChangeText={(userEmail) => setEmail(userEmail)}
    placeholderText={'Email'} 
    keyboardType="email-address"
     autoCapitalize="none"
      autoCorrect={false}/>
    <CustomInput 
    labelValue={password}
    onChangeText={(userPassword) => setPassword(userPassword)}
    secureTextEntry={true}
    placeholderText={'Password'}
    />
        <CustomInput 
    labelValue={password}
    onChangeText={(userPassword) => setPassword(userPassword)}
    secureTextEntry={true}
    placeholderText={'Confirm Password'}
    />

     <CustomButton 
     buttonTitle={'Sign Up'}
     onPress={() => alert('Signup clicked')}/>

     <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>



     <CustomSocials 
     buttonTitle={'Sign Up with Facebook'}
     btnType="facebook"
     color="#4867aa"
     backgroundColor='#e6ebf6'
     />
          <CustomSocials 
     buttonTitle={'Sign Up with Google'}
     btnType="google"
     color="#de4d41"
     backgroundColor="#f5e7ea"
     />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F0E7D8',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      color: 'grey',
    },
    logo: {
      // height: 150,
      width: '100%',
      resizeMode: 'contain',
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
      color: 'black',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 25,
    },
    navButtonText: {
      fontSize: 10,
      fontWeight: '300',
      color: 'black',
    },
});