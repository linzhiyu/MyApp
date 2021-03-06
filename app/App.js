import React, { Component } from "react";
import get from "lodash/get";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import PushNotification from "react-native-push-notification";
import PushHandler from "./PushHandler";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: null
    };
  }

  changeNotification = notification => {
    this.setState({ notification });
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {get(this.state, "notification") && (
          <View>
            <TouchableHighlight
              onPress={() => {
                this.setState({ notification: null });
                PushNotification.setApplicationIconBadgeNumber(0);
              }}
            >
              <Text style={styles.welcome}>清空</Text>
            </TouchableHighlight>
            <Text style={styles.welcome}>{this.state.notification}</Text>
          </View>
        )}
        <PushHandler changeNotification={this.changeNotification} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default App;
