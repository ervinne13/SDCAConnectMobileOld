import React from "react";
import Setup from "./src/boot/setup";
import Splashscreen from "./src/screens/splashscreen";

import { AsyncStorage } from "react-native";
import { Root } from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    console.log('fonts loaded');

    console.log('Saved Task List', await AsyncStorage.getItem('@Connect:tasks'));

    //  TODO: check for authenticated user here
    let response = await fetch('http://172.16.150.229:8011/api/v1/task-list');
    let responseJson = await response.json();

    await AsyncStorage.setItem('@Connect:tasks', JSON.stringify(responseJson));
      
    console.log('Task List', responseJson);

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {      
      return (
        <Root>
          <Splashscreen />
        </Root>
      );
    } else {
      return <Setup />;
    }    
  }
}