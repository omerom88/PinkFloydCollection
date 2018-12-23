import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Ranker extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={styles.container}>
              <Text style={styles.textStyle} onPress={increment}>+</Text>
          <Text style={styles.rankStyle}>{counter}</Text>
          <Text style={styles.textStyle} onPress={decrement}>-</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.02
    },
    rankStyle : {
        marginRight: width * 0.1,
        marginLeft: width * 0.1,
        fontSize: 50,
        color : '#ff69b4'
    },
    textStyle: {
        fontSize: 50,
        color: '#ff69b4',
    },
});
