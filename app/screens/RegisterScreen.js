import React from "react";
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { registerEmail } from '../store/actions/register'

class RegisterScreen extends React.Component {
  state = {
    email: ""
  }

  register() {
    var result = this.props.registerEmail(this.state.email).then(() => {
      this.props.navigation.navigate('Home')  
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register your account</Text>
        <TextInput 
          keyboardType="email-address" 
          style={registerTextInputStyle}  
          placeholder="Please, enter you e-mail"
          onChangeText={(text) => this.setState({ email: text })}/>
        <Button
          title="Register"
          onPress={() => this.register() } />
      </View>
    );
  }
}


const registerTextInputStyle = {
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
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.register.isLoading,
    email: state.register.email,
    userId: state.register.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerEmail: (email) => dispatch(registerEmail(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
