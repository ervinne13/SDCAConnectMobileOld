import React from "react";
import Setup from "./src/boot/setup";
import Splashscreen from "./src/screens/splashscreen";

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

    //  TODO: check for authenticated user here

    

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