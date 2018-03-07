import React from 'react';
import HomeScreen from './screens/HomeScreen'
import SafeScreen from './screens/SafeScreen'
import RegisterScreen from './screens/RegisterScreen'
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';


const navigator = StackNavigator({
    Register: { screen: RegisterScreen },
    Home: { screen: HomeScreen },
    Safe: { screen: SafeScreen }
}, { 
    initialRouteName: 'Register', 
    headerMode: 'none' 
});

export default navigator
