import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {CHOICES} from '../constants';

export default function ButtonGroup(props){
    return(
        CHOICES.map(item => {
            return(
                <TouchableOpacity style={styles.buttonStyle} key={item.name} onPress={() => props.onPressButton(item.name)}>
                    <Text style={styles.buttonText}>{item.name}</Text>
                </TouchableOpacity>
            );
        })
    )
}

const styles = StyleSheet.create({
    buttonStyle: { 
      width: 200, 
      margin: 10, 
      height: 50, 
      borderRadius: 10, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#640D14', 
    }, 
    
    buttonText: { 
      fontSize: 25, 
      color: 'white', 
      fontWeight: 'bold', 
    }, 
});