import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/Dimensions'

const CustomButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
    { ...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '90%',
        height: windowHeight/18,
        backgroundColor: '#a63a50',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 30,
        borderTopStartRadius: 30
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#F0E7D8',
        // fontFamily: 'Lato-Regular',
    }
})