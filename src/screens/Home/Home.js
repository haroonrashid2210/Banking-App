import React, {Component} from 'react';
import {Text, Container, Row, View, H1, H2} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Style from './Style';
import {TouchableOpacity, FlatList, ScrollView} from 'react-native';
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
    ];

    return (
      <Container style={Style.container}>
        {/* SECTION 1 */}
        <LinearGradient
          colors={[COLOR.gradient1, COLOR.gradient2]}
          style={Style.topSection}>
          {/* Current balance  */}
          <View style={{alignItems: 'center', paddingVertical: 50}}>
            <Text style={{...Style.text, fontSize: 20}}>Balance</Text>
            <Text style={Style.balance}>Rs. 34,010</Text>
          </View>

          {/* send and bill  */}
          <View style={Style.row2}>
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name={'paper-plane'}
                size={30}
                color={'white'}
                style={Style.icon}
              />
              <Text style={Style.text}>Send</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name={'wallet'}
                size={30}
                color={'white'}
                style={Style.icon}
              />
              <Text style={Style.text}>Top up</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name={'card'}
                size={30}
                color={'white'}
                style={Style.icon}
              />
              <Text style={Style.text}>Cards</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name={'grid'}
                size={30}
                color={'white'}
                style={Style.icon}
              />
              <Text style={Style.text}>More</Text>
            </View>
          </View>

          <Spacer size={30} />
        </LinearGradient>

        {/* Bottom Section */}
        <View style={Style.bottomSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 40,
            }}>
            <H2 style={{fontWeight: 'bold'}}>Last transactions</H2>
            <Text style={{color: COLOR.primary}}>See all</Text>
          </View>

          <FlatList
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
