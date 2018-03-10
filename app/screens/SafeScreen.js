import React from "react";
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { sendKeepAlive, requestClose } from "../store/actions/safeZone";

class SafeScreen extends React.Component {

  componentDidMount() {
    this.sendKeepAlive();
  }

  sendKeepAlive() {
    if(!this.props.isOpen){ return; }

    this.props.sendKeepAlive(this.props.token).then(() =>{
      this.timeout = setTimeout(() => this.sendKeepAlive(), 300)
    });
  }

  requestClose() {
    this.props.requestClose(this.props.token).then(() => {
      this.props.navigation.goBack()
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to the Safe Screen</Text>
        <Button
          title="Close"
          onPress={() => this.requestClose() }/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.register.isLoading,
    email: state.register.email,
    userId: state.register.userId,
    token: state.safeZone.token,
    isAccessDenied: state.safeZone.isAccessDenied,
    isOpen: state.safeZone.isOpen
  };  
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendKeepAlive: (token) => dispatch(sendKeepAlive(token)),
    requestClose: (token) => dispatch(requestClose(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SafeScreen);
