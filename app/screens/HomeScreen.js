import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { registerEmail } from "../store/actions/register";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>E-mail: { this.props.email }</Text>
        <Text>UserId: { this.props.userId }</Text>
      </View>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
