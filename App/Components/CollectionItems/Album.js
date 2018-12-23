import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback, StyleSheet, Dimensions} from 'react-native';
import Card from '../LoginItems/Card'

const { width} = Dimensions.get('window');

export default class Album extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<TouchableWithoutFeedback onPress={this.props.onPress}>
      <View>
        <Card>
          <View style={styles.ContainerStyle}>
            <View style={styles.cardStyle}>
              <Image style={styles.imageStyle} source={{uri: this.props.imageUrl}}/>
              <View style={styles.runningText}>
                <Text style={styles.titleStyle}>{this.props.itemName}</Text>
                <Text style={styles.descriptionStyle}>{this.props.itemDescription}</Text>
              </View>
              <Text>{this.props.itemRank}</Text>
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>)
  };
}


const styles = StyleSheet.create({
  ContainerStyle: {
    justifyContent: 'space-between'
  },
  cardStyle :{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    height: width * 0.3,
    width: width * 0.3  ,
    marginRight: width * 0.03,
  },
  titleStyle: {
    fontSize: 14,
    color: 'black',
  },
  descriptionStyle: {
    fontSize: 11,
    color: 'rgba(0,0,0,0.5)',
    marginRight: width * 0.05,
  },
  runningText: {
    width: width * 0.55,
  }
});

