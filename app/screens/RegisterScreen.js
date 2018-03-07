import React from "react";
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { registerEmail } from '../store/actions/register'

class RegisterScreen extends React.Component {

  state = {
    email: ""
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register your account</Text>
        <TextInput style={{
          height: 40,
          width: "80%",
          padding: 10,
          margin:10,
          borderBottomColor: 'gray',
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          textAlign: "center",
          borderWidth: 1
        }} placeholder="Please, enter you e-mail" 
        keyboardType="email-address" 
        onChangeText={(text) => this.setState({ email: text })}/>

        <Button
          title="Register"
          onPress={() => this.props.registerEmail(this.state.email)} />
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.register.isLoading,
    email: state.register.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerEmail: (email) => dispatch(registerEmail(email))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

