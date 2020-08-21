import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import propTypes from 'prop-types';


export default function Screen({temp}){
    return(
        <View style={styles.container}>
            <View style={styles.iconView}>
                <Text>{temp}</Text>
            </View>
            <View style={styles.Text}>
                <Text>wwwwww</Text>
            </View>
        </View>
    );
}

Screen.propTypes = {
    temp: propTypes.number.isRequired,
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  iconView: {
    flex: 1,
    backgroundColor: '#10aa9a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    flex: 1,
    backgroundColor: '#aaf9a2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

