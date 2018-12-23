import React from 'react';
import {Dimensions, View} from 'react-native';

const { width, height } = Dimensions.get('window');

const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: width * 0.03,
    marginRight: width * 0.03,
    marginTop: height * 0.008,
    marginBottom: height * 0.008,
    backgroundColor: '#fff'
  }
};

export default Card;
