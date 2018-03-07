import React from "react";
import { View, Text, Button } from 'react-native';

export default class SafeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Register</Text>
          <Button
           title="Go back"
           onPress={() => this.props.navigation.goBack()}/>
        </View>
      );
    }
  }