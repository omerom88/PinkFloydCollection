import {Image, StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";
import React from 'react';

import {bindActionCreators} from 'redux';
import Ranker from "../Components/AlbumItems/Ranker";
import * as counterActions from "../Actions/counterActions";
import { connect } from 'react-redux';


const { width, height } = Dimensions.get('window');

@connect(state => ({
    state: state.counter
}))

class AlbumScreen extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.title = navigation.getParam('title', 'no title');
        this.details = navigation.getParam('details', 'no details');
        this.image = navigation.getParam('image', null);
        this.id = navigation.getParam('id', 0);
    }

    increment (){
        this.props.actions.increment(this.id)
    }

    decrement (){
        this.props.actions.decrement(this.id)
    }

    render() {
        let myCounter = this.props.dataList.find(item=>item.id === this.id).rank;
        return (
            <ScrollView style={styles.ScrollStyle}>
                <View style={styles.ContainerStyle}>
                    <View style={styles.runningText}>
                        <Text style={styles.titleStyle}>{this.title}</Text>
                        <Text style={styles.descriptionStyle}>{this.details}</Text>
                        <Text style={styles.descriptionStyle}>{this.details}</Text>
                        <Text style={styles.descriptionStyle}>{this.details}</Text>
                    </View>
                    <Image style={styles.imageStyle} source={{uri: this.image}}/>
                        <Ranker
                            counter={myCounter}
                            increment={this.increment.bind(this)}
                            decrement={this.decrement.bind(this)}  />
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
                const {dataList} = state.counter;
                return {dataList};

};

const mapDispatchToProps = (dispatch) => {
                return {actions: bindActionCreators(counterActions, dispatch)}
};

export default connect(mapStateToProps,mapDispatchToProps)(AlbumScreen);



const styles = StyleSheet.create({
    ScrollStyle:{
        backgroundColor: 'rgb(211,211,211)',
    },
    ContainerStyle: {
        flex: 3,
        alignItems: 'center',
    },
    imageStyle: {
        height: width * 0.6,
        width: width * 0.6,
        marginTop: height * 0.05
    },
    titleStyle: {
        fontSize: 22,
        color: '#ff69b4',
        marginTop: height * 0.05,
        marginBottom: height * 0.02,
        textAlign: 'center'
    },
    descriptionStyle: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        textAlign: 'center'
    },
    runningText: {
        width: width * 0.8,
    },
});