import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/Dimensions'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const CustomSocials = ({
    buttonTitle, 
    btnType, 
    color, 
    backgroundColor, 
    ...rest}) => {
        let bgColor = backgroundColor;
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: bgColor}]}
    { ...rest}>
        <View style={styles.iconWrapper}>
            <FontAwesome style={styles.icon} name={btnType} size={22} color={color}/>
        </View>
        <View style={styles.btnTextWrappers}>
            <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomSocials

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        width: '90%',
        height: windowHeight/16,
        backgroundColor: '#a63a50',
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 8
 
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTextWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'blue',
        // fontFamily: 'Lato-Regular',
    },
});