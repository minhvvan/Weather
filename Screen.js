import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import propTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "Watch out!!"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Gray day..." 
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subtitle: "Just don't go outside."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Let it go~."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "So So."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "Sunny day :)."
    },
    Clouds: {
        iconName: "",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Clouds",
        subtitle: "Don't laundry."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#616161", "#9bc5c3"],
        title: "Mist",
        subtitle: "I don't like Mist."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#BA8B02", "#181818"],
        title: "Dust",
        subtitle: "Must take a mask."
    },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Couldn't show front."
      }
  };
  

export default function Screen({temp,condition}){
    return(
        <LinearGradient  // Background Linear Gradient
            colors={weatherOptions.[condition].gradient}
            style={styles.container}
        >
            <View style={styles.iconView}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={93} color="white" />
                <Text style={{marginTop:10, fontSize: 40, fontWeight:"200",color:'white'}}>{temp}</Text>
            </View>
            <View style={styles.Text}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Screen.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(
        ["Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"]).isRequired,
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  Text: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign:'left',
    marginLeft: 50,
    color: 'white'
  },
  subtitle: {
    fontSize: 30,
    textAlign:'left',
    marginLeft: 50,
    marginBottom: 100,
    color: 'white'
  }
});

