import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import styles from "./styles";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: null,
      password: null
     };    
  }

  onLogin() {
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input onChangeText={text => this.setState({username: text})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={text => this.setState({password: text})}/>
            </Item>
          </Form>
          <Button onPress={this.onLogin} block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
