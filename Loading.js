import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <LinearGradient  // Background Linear Gradient
        colors={['#C9D6FF', '#E2E2E2']}
        style={styles.gradient}
        >
        <Text style={styles.text}>Loading...</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    
  },
  text: {
    marginLeft: 50,
    marginBottom: 140,
    fontSize: 40,
    fontWeight: "200",
  }
});
