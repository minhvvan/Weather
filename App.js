import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        errorMsg: ' ',
    }
    getLocation = async() =>{
        const status  = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            this.setState({errorMsg : 'Permission to access location was denied'});
            console.log(this.state.errorMsg);
        }
        const location = await Location.getCurrentPositionAsync();
  
        console.log(location);

    }

    componentDidMount(){
        this.getLocation();
    }

    render(){
        return <Loading/>;
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
