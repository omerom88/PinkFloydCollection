import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
        justifyContent: 'center'
    },
    rankStyle : {
        marginRight: 50,
        marginLeft: 50,
        fontSize: 50,
        color : '#ff69b4'
    },
    textStyle: {
        fontSize: 50,
        color: '#ff69b4',
    },
});
