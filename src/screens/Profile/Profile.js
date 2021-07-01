import React, {Component} from 'react';
import {Text, Container, View, H2} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Style from './Style';
import {FlatList} from 'react-native';
import Spacer from '../../components/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR} from '../../Theme';

class Profile extends Component {
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
            <Ionicons name={'person-outline'} size={60} color={'white'} />
            <Spacer size={5} />
            <Text
              style={{
                ...Style.text,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Haroon Rashid
            </Text>
            <Spacer size={10} />
            <Text
              style={{
                ...Style.text,
                color: '#fff',
                fontSize: 18,
              }}>
              Current Account
            </Text>
            <Text
              style={{
                ...Style.text,
                color: '#fff',
                fontSize: 18,
              }}>
              Sadar branch, RWP
            </Text>
            <Spacer size={10} />

            <Text
              style={{
                ...Style.text,
                color: '#fff',
                fontSize: 18,
              }}>
              BBBB AAAAAAAAAAAAAAAA
            </Text>
          </View>

          {/* send and bill  */}
          <View style={Style.row2}>
            <Ionicons
              name={'copy-outline'}
              size={25}
              color={'white'}
              style={{...Style.icon, flexGrow: 1}}
            />
          </View>

          <Spacer size={25} />
        </LinearGradient>

        {/* Bottom Section */}
        <View style={{...Style.bottomSection, paddingVertical: 50}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor: '#eee',
              }}>
              <Ionicons
                name={'lock-closed-outline'}
                size={25}
                color={'white'}
                style={{...Style.icon}}
              />
              <Text style={{fontSize: 18, marginLeft: 20}}>
                Change password
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor: '#eee',
              }}>
              <Ionicons
                name={'finger-print-outline'}
                size={25}
                color={'white'}
                style={{...Style.icon}}
              />
              <Text style={{fontSize: 18, marginLeft: 20}}>
                Set fingerprint
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor: '#eee',
              }}>
              <Ionicons
                name={'star-outline'}
                size={25}
                color={'white'}
                style={{...Style.icon}}
              />
              <Text style={{fontSize: 18, marginLeft: 20}}>Rate us</Text>
            </View>
          </View>
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

export default Profile;
