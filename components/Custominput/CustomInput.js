import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react';
import { windowHeight, windowWidth} from '../../utils/Dimensions'


const CustomInput = ({labelValue, placeholderText, ...rest}) => {
  return (
    <View style={styles.inputField}>
      <TextInput  style={styles.input}
        value={labelValue}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#A63A50'
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: '95%',
        height: windowHeight / 15,
        backgroundColor: '#AB9B96',
        borderRadius: 10,
    },
    input: {
        padding: 5,
        flex: 1,
        fontSize: 13,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#A63A50',


    }
})