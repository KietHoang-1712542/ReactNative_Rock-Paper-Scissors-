import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default GameStatus = ({result, total, win, lose}) => {
    const pWin = Math.round(10000*win/total)/100;
    const pLose = Math.round(10000*lose/total)/100;
    const pDraw = Math.round(100 * (100 - (pWin + pLose)))/100;

    return (
        <View>
            <Text style={[
                styles.resultText, 
                {color: (result === 'Victory!' ? 'green' : (result === 'Defeat!' ? 'red' : null))}
            ]}>
                {result}
            </Text>
            <View style={styles.resultDetailWrapper}>
                <Text style={styles.resultDetailText}>Total:   {total}</Text>
                <Text style={styles.resultDetailText}>W/D/L:   {win}/{total - (win + lose)}/{lose}</Text>
                <Text style={styles.resultDetailText}>Rate:   {pWin}%/{pDraw}%/{pLose}%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultText: {
        fontSize: 33,
        alignSelf: 'center',
    },

    resultDetailWrapper: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    resultDetailText: {
        fontSize: 15,
        color: 'blue',
    },
});