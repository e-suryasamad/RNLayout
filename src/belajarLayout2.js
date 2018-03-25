import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 30, color: 'white' }} >Header</Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 30, margin: 20, fontSize: 20 }}>Slider</Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text style={styles.text}>L1</Text></View>
        <View style={styles.button}><Text style={styles.text}>LMid1</Text></View>
        <View style={styles.button}><Text style={styles.text}>RMid1</Text></View>
        <View style={styles.button}><Text style={styles.text}>R1</Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text style={styles.text}>L2</Text></View>
        <View style={styles.button}><Text style={styles.text}>LMid2</Text></View>
        <View style={styles.button}><Text style={styles.text}>RMid2</Text></View>
        <View style={styles.button}><Text style={styles.text}>R2</Text></View>
      </View>
      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}>LI(E)FE</Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
    marginTop: 25,
    justifyContent: 'space-around'
  },
  box1: {
    flex: 0.7,
    backgroundColor: 'purple'
  },
  box2: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: 'gold',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: 'gold',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  box5: {
    flex: 0.7,
    backgroundColor: 'silver',
    margin: 20,
    justifyContent: 'center'
  },
  button: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
    // marginBottom: '20%'
  },
  text: {
    color: 'white'
  }
});
