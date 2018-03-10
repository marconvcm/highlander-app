import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { 
  requestOpen,
  requestOpenError,
  requestOpenSuccess 
} from "../store/actions/safeZone";

class HomeScreen extends React.Component {

  openSafeScreen() {
    this.props.requestOpen(this.props.userId).then(() => {
      if(this.props.isOpen) {
        this.props.navigation.navigate('Safe')
      }
    });
  }

  renderMessage() {
    if(this.props.isAccessDenied) {
      return <Text style={{ color: "red" }}> You aren't allowed to access </Text>
    } else {
      return <Text></Text>
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Open Safe screen"
          onPress={() => this.openSafeScreen() } />
        { this.renderMessage() }
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
    requestOpen: (userId) => dispatch(requestOpen(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
