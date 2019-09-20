/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,
      measurement: {}
    }
  }

  render() {
    const videoStyle = this.state.fullScreen ? {
      position: 'absolute',
      top: 0,
      left: 0,
      height: Math.round(Dimensions.get('window').height),
      width: Math.round(Dimensions.get('window').width),
      justifyContent: 'center',
      backgroundColor: "#0000ff",
      zIndex: 999,
      marginTop: -1 * (this.state.measurement.y || 0),
      marginLeft: -1 * (this.state.measurement.x || 0),
    } : {
        width: 150,
        height: 150,
        backgroundColor: "#ff0000"
      }
    return (
      <View style={styles.container}>
        <View
          style={styles.subContainer}
          onLayout={({ nativeEvent }) => {
            this.setState({
              measurement: nativeEvent.layout
            })
          }}>
          <View style={videoStyle}>
            <Button title={this.state.fullScreen ? "Minimize" : "Maximize"} onPress={() => { this.setState({ fullScreen: !this.state.fullScreen }) }}></Button>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: "center",
    justifyContent: "center"
  },
  subContainer: {
    backgroundColor: '#ffff00',
    width: "80%",
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  }
});
