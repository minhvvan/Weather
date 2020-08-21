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
        try{
            const {
                data: {
                  main: { temp },
                  weather
                }
              } = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`
                );
           
                this.setState({
                    isLoading: false,
                    condition: weather[0].main,
                    temp
                });
            }catch(error){
                console.log(error);
            }
    }

    componentDidMount(){
        this.getLocation();
    }

    render(){
        const {isLoading,temp,condition } = this.state;
        return isLoading ? <Loading/> :  <Screen temp = {Math.round(temp)} condition={condition} />;
    }
}


