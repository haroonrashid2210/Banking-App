import React, {Component} from 'react';
import {Text, Container, View, H2} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Style from './Style';
import {FlatList} from 'react-native';
import Spacer from '../../components/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR} from '../../Theme';

class Home extends Component {
  render() {
    const DATA = [
      {
        id: '1',
        title: 'Abdul Muizz',
        type: 'in',
        date: '4 March',
        amount: 1600,
      },
      {
        id: '2',
        title: 'Zubair Khan',
        type: 'out',
        date: '2 March',
        amount: 500,
      },
      {
        id: '3',
        title: 'Amazon',
        type: 'out',
        date: '21 Feb',
        amount: 900,
      },
      {
        id: '4',
        title: 'Fiverr',
        type: 'in',
        date: '11 Feb',
        amount: 4000,
      },
      {
        id: '11',
        title: 'Abdul Muizz',
        type: 'in',
        date: '4 March',
        amount: 1600,
      },
      {
        id: '21',
        title: 'Zubair Khan',
        type: 'out',
        date: '2 March',
        amount: 500,
      },
      {
        id: '32',
        title: 'Amazon',
        type: 'out',
        date: '21 Feb',
        amount: 900,
      },
      {
        id: '42',
        title: 'Fiverr',
        type: 'in',
        date: '11 Feb',
        amount: 4000,
      },
      {
        id: '121',
        title: 'Abdul Muizz',
        type: 'in',
        date: '4 March',
        amount: 1600,
      },
      {
        id: '212',
        title: 'Zubair Khan',
        type: 'out',
        date: '2 March',
        amount: 500,
      },
      {
        id: '322',
        title: 'Amazon',
        type: 'out',
        date: '21 Feb',
        amount: 900,
      },
      {
        id: '422',
        title: 'Fiverr',
        type: 'in',
        date: '11 Feb',
        amount: 4000,
      },
    ];

    return (
      <Container style={Style.container}>
        {/* SECTION 1 */}
        <LinearGradient
          colors={[COLOR.gradient1, COLOR.gradient2]}
          style={Style.topSection}>
          {/* Current balance  */}
          <View style={{alignItems: 'center', paddingVertical: 50}}>
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
              Transaction History
            </Text>
          </View>

          {/* send and bill  */}
          <View style={Style.row2}>
            <Text
              style={{
                ...Style.text,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Jun 2021
            </Text>
            <Ionicons
              name={'calendar'}
              size={25}
              color={'white'}
              style={Style.icon}
            />
          </View>

          <Spacer size={25} />
        </LinearGradient>

        {/* Bottom Section */}
        <View style={{...Style.bottomSection, paddingVertical: 50}}>
          <FlatList
            style={{
              paddingHorizontal: 50,
            }}
            data={DATA}
            renderItem={({item}) => <Item props={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </Container>
    );
  }
}

const Item = ({props}) => (
  <View
    style={{
      flexDirection: 'row',
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
    <View style={{flexDirection: 'row'}}>
      <Ionicons
        name={props.type == 'in' ? 'arrow-down' : 'arrow-up'}
        size={25}
        color={props.type == 'in' ? 'green' : 'red'}
        style={{...Style.icon, opacity: 0.6}}
      />
      <View style={{justifyContent: 'center', marginLeft: 15}}>
        <Text style={{fontSize: 18}}>{props.title}</Text>
        <Text style={{fontSize: 12}}>{props.date}</Text>
      </View>
    </View>
    <View>
      <Text style={{fontSize: 18, marginLeft: 20}}>Rs. {props.amount}</Text>
    </View>
  </View>
);

export default Home;
