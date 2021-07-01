import React, {Component} from 'react';
import {View} from 'react-native';

class Spacer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const size = this.props.size;
    return <View style={{marginVertical: this.props.size}}></View>;
  }
}

export default Spacer;
