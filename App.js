import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import Screen from './Screen';
import * as axios from 'axios';

const API_key = 'e096ae46f45b79ac3723946f3382abb6';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        errorMsg: ' ',
        isLoading: true,
    }

    getLocation = async() =>{
        const status  = await Location.requestPermissionsAsync();
        if (status != 'granted') {
            this.setState({errorMsg : 'Permission to access location was denied'});
            console.log(this.state.errorMsg);
        }
        const {
            coords: {latitude, longitude}
        } = await Location.getCurrentPositionAsync();
  
        this.getWeather(latitude, longitude);

    }

    getWeather = async(latitude, longitude) => {
        const {data} = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`
            );
            console.log(data.weather);
            try{
                this.setState({isLoading: false, temp: data.main.temp});
            }catch(error){
                console.log(error);
            }
    }

    componentDidMount(){
        this.getLocation();
    }

    render(){
        const {isLoading,temp} = this.state;
        return isLoading ? <Loading/> :  <Screen temp = {Math.round(temp)}/>;
    }
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

