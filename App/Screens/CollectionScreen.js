import {StyleSheet, ScrollView, FlatList} from "react-native";
import React from 'react';
import Album from "../Components/CollectionItems/Album"
import {bindActionCreators} from 'redux';
import * as counterActions from "../Actions/counterActions";
import { connect } from 'react-redux';

@connect(state => ({
    state: state.counter
}))

export default class CollectionScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    onPressItem(item) {
        this.props.navigation.push('Album',
            {
                title: item.name,
                details: item.description,
                image: item.url,
                id: item.id,
            })
    }

    renderItem(item) {
        const { name, url, description, rank } = item;
        const onPressFunc = this.onPressItem.bind(this, item);
        return (
        <Album itemName={name} imageUrl = {url} itemDescription={description} itemRank={rank} onPress={onPressFunc}/>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    data={this.props.state.dataList}
                    key={this.props.state.dataList.name}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => this.renderItem(item)}/>
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

connect(mapStateToProps,mapDispatchToProps)(CollectionScreen);


const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'rgb(211,211,211)'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        marginHorizontal: 150,
        borderRadius: 20,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});