import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  const { height } = useWindowDimensions();
  return (
    <Onboarding
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#f0e7d8',
      image: <Image style={[styles.logo, {height: height * 0.3}]} source={require('../assets/images/hifi.png')} />,
      title: 'Connect',
      subtitle: 'Find your kind of people and connect',
    },
    {
      backgroundColor: '#f0e7d8',
      image: <Image style={[styles.logo, {height: height * 0.3}]} source={require('../assets/images/add-friend.png')} />,
      title: 'Add',
      subtitle: 'Add your friends to share with',
    },
    {
      backgroundColor: '#f0e7d8',
      image: <Image style={[styles.logo, {height: height * 0.3}]} source={require('../assets/images/fist-bump-gesture.png')} />,
      title: 'Chat',
      subtitle: 'Let your freak flag fly high in your chats',
    },
  ]}/>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    logo: { 
      height: 180,
      width: 180,
    }
});