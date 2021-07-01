import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Button,
  Thumbnail,
  Item,
  Container,
  Input,
  Icon,
  Text,
} from 'native-base';
import {STYLE, COLOR} from './Style';
import Spacer from '../../components/Spacer';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secure: true,
    };

    this.toggleSecure = this.toggleSecure.bind(this);
  }

  toggleSecure() {
    this.setState(prev => {
      return {
        ...prev,
        secure: !prev.secure,
      };
    });
  }

  render() {
    const style = STYLE.LOGIN_SCREEN;
    return (
      <Container>
        <View style={style.container}>
          <Thumbnail
            style={{width: 150, height: 150}}
            source={require('../../assets/logo.png')}
          />

          <Spacer size={60} />

          <Item regular>
            <Icon style={{color: 'gray'}} name={'person-outline'} />
            <Input placeholder="Username" autoCapitalize={'none'} />
          </Item>

          <Spacer size={5} />

          <Item regular>
            <Icon style={{color: 'gray'}} name={'lock-closed-outline'} />
            <Input
              placeholder={'Password'}
              autoCapitalize={'none'}
              secureTextEntry={this.state.secure}
            />
            <Icon
              style={{paddingRight: 15, color: 'gray'}}
              name={!this.state.secure ? 'eye-outline' : 'eye-off-outline'}
              onPress={this.toggleSecure}
            />
          </Item>

          <Spacer size={20} />

          {/* Buttons */}
          <Button
            block
            style={style.buttonLogin}
            onPress={() => this.props.navigation.navigate('HomeTabs')}>
            <Text>Login</Text>
          </Button>

          <Spacer size={5} />

          <Button block style={style.button} bordered>
            <Text>Register</Text>
          </Button>

          <Spacer size={10} />
          <Text>
            Forget credentials?{' '}
            <Text style={{color: COLOR.primary}}>Click here</Text>
          </Text>
        </View>
      </Container>
    );
  }
}

export default Login;
