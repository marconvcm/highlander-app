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
    this.props.requestOpen(this.props.userId);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Open Safe screen"
          onPress={() => this.openSafeScreen() } />
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
    requestOpen: () => dispatch(requestOpen()),
    requestOpenError: () => dispatch(requestOpenError()),
    requestOpenSuccess: () => dispatch(requestOpenSuccess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
