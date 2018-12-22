import * as types from "../Actions/ActionTypes";

const initialState = {
  // items: Array(12).fill('').map((_,index)=>({id:index+1,counter:0}))
  dataList : [
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
};

export default function counter(state = initialState, action = {}) {
  let data = state.dataList;
  let dataIndex = data.findIndex(item=> item.id === action.payload);

  switch (action.type) {
    case types.INCREMENT:
      if(dataIndex>-1){
        data[dataIndex].rank += 1;
      }
      return {
        ...state,
        dataList: data
      };
    case types.DECREMENT:
      if(index>-1){
        data[dataIndex].rank -= 1;
      }
      return {
        ...state,
        dataList: data
      };
    default:
      return state;
  }
}
