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
    placeholderText={'Password'}
    />

     <CustomButton 
     buttonTitle={'Log In'}
     onPress={() => alert('Log in clicked')}/>

     <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
      <Text style={styles.navButtonText}>Don't have an account? Create here!!</Text>
     </TouchableOpacity>

     <CustomSocials buttonTitle={'Login with Facebook'}/>
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