import {StyleSheet, ScrollView, FlatList} from "react-native";
import React from 'react';
import Album from "../Components/CollectionItems/Album"
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from 'redux';
import * as counterActions from "../Actions/counterActions";

// @connect(state => ({
//     state: state.counter
// }))

export default class CollectionScreen extends React.Component {
    dataList;
    constructor(props) {
        super(props);
        this.dataList = [
            {name: "Animals", url: 'https://upload.wikimedia.org/wikipedia/en/7/74/Pink_Floyd-Animals-Frontal.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 1, rank: 0},
            {name: "Atom Heart Mother", url: 'https://upload.wikimedia.org/wikipedia/en/2/2e/AtomHeartMotherCover.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 2, rank: 0},
            {name: "The Dark Side of the Moon", url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 3, rank: 0},
            {name: "The Division Bell", url: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Pink_Floyd_-_Division_Bell.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 4, rank: 0},
            {name: "The Endless River", url: 'https://upload.wikimedia.org/wikipedia/en/b/be/Pink_Floyd_-_The_Endless_River_%28Artwork%29.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 5, rank: 0},
            {name: "Meddle", url: 'https://upload.wikimedia.org/wikipedia/en/d/d4/MeddleCover.jpeg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 6, rank: 0},
            {name: "Obscured by Clouds", url: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Pink_Floyd_-_Obscured_by_Clouds.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 7, rank: 0},
            {name: "The Piper at the Gates of Dawn", url: 'https://upload.wikimedia.org/wikipedia/en/3/3c/PinkFloyd-album-piperatthegatesofdawn_300.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 8, rank: 0},
            {name: "A Saucerful of Secrets", url: 'https://upload.wikimedia.org/wikipedia/en/5/54/Saucerful_of_secrets2.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 9, rank: 0},
            {name: "Ummagumma", url: 'https://upload.wikimedia.org/wikipedia/en/1/16/PinkFloyd-album-ummagummastudio-300.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 10, rank: 0},
            {name: "The Wall", url: 'https://upload.wikimedia.org/wikipedia/en/7/76/TheWallImmersion.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 11, rank: 0},
            {name: "More", url: 'https://upload.wikimedia.org/wikipedia/en/4/40/MoreCover.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem felis, rutrum sit amet orci eget, convallis rhoncus felis. Fusce tempus purus nisi, at fermentum nisl lacinia sed. Pellentesque sit amet gravida orci. Integer sed congue purus, eu tempor quam.", id: 12, rank: 0},
        ]
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
        const { name, url, description, id, rank } = item;
        // let myCounter = this.props.state.items.find(item=>item.id === id).counter;
        const onPressFunc = this.onPressItem.bind(this, item);
        return (
            <Album itemName={name} imageUrl = {url} itemDescription={description} myCounter={rank} onPress={onPressFunc}/>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    data={this.dataList}
                    key={this.dataList.name}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => this.renderItem(item)}/>
            </ScrollView>
        );
    }
}

// const mapStateToProps = (state) => {
//     const {items} = state.counter;
//     return {items};
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {actions: bindActionCreators(counterActions, dispatch)}
// };
//
// connect(mapStateToProps,mapDispatchToProps)(CollectionScreen);


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