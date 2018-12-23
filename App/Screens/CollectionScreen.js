import {StyleSheet, ScrollView, FlatList} from "react-native";
import React from 'react';
import Album from "../Components/CollectionItems/Album"
import { connect } from 'react-redux';

@connect(state => ({
    state: state.counter
}))

class CollectionScreen extends React.Component {
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
                <FlatList style={styles.listStyle}
                    data={this.props.dataList}
                    keyExtractor={item => item.name}
                    extraData={this.props.dataList}
                    renderItem={({ item }) => this.renderItem(item)}/>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const {dataList} = state.counter;
    return {dataList};
};

export default connect(mapStateToProps,{})(CollectionScreen);


const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'rgb(211,211,211)',
    },
    listStyle: {
        marginTop: 7
    }
});