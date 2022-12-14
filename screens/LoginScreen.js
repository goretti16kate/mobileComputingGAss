import { StyleSheet, Text,KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import CustomButton from '../components/Custombutton/CustomButton';
import CustomInput from '../components/Custominput/CustomInput';
import CustomSocials from '../components/Customsocials/CustomSocials';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Image style={styles.logo}
        source={require('../assets/images/Talk.png')}
      />
      <Text style={styles.text}></Text>
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

     <CustomButton 
     buttonTitle={'Log In'}
     onPress={() => alert('Log in clicked')}/>

     <TouchableOpacity style={styles.forgotButton} 
     onPress={() => alert('forgot Password')}>
      <Text style={styles.navButtonText}>Forgot password?</Text>
     </TouchableOpacity>


     <CustomSocials 
     buttonTitle={'Login with Facebook'}
     btnType="facebook"
     color="#4867aa"
     backgroundColor='#e6ebf6'
     />
          <CustomSocials 
     buttonTitle={'Login with Google'}
     btnType="google"
     color="#de4d41"
     backgroundColor="#f5e7ea"
     />

<TouchableOpacity style={styles.forgotButton}
onPress={() => navigation.navigate('Signup')}>
      <Text style={styles.navButtonText}>Don't have an account? Create here!!</Text>
     </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F0E7D8',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
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
      fontWeight: '400',
      color: '#000011',
    },
});