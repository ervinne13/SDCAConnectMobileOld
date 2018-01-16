import React from "react";
import Setup from "./src/boot/setup";
import Login from "./src/screens/login";
import Splashscreen from "./src/screens/splashscreen";

import { AsyncStorage } from "react-native";
import { Root } from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, authenticated: false };    
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    let authenticationToken =  await AsyncStorage.getItem('@Connect:AuthToken');    
    if (authenticationToken) {
      //  TODO validate auth token here
      this.setState({ authenticated: true });
      console.log('authenticated, will lookup user from server later');
    }

    // let response = await fetch('http://172.16.150.229:8011/api/v1/task-list');
    // let responseJson = await response.json();

    // await AsyncStorage.setItem('@Connect:tasks', JSON.stringify(responseJson));
      
    // console.log('Task List', responseJson);

    this.setState({ loading: false });

    console.log('component finished mounting');
  }

  render() {
    if (this.state.loading) {      
      return (
        <Root>
          <Splashscreen />
        </Root>
      );
    } else if (!this.state.authenticated) {
      return <Login />;      
    } else {
      return <Setup />;
    }    
  }
}