import React from 'react';
import { View } from 'react-native';

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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff'
  }
};

export default Card;
