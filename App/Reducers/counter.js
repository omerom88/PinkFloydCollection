import * as types from "../Actions/ActionTypes";

const initialState = {
  items: Array(12).fill('').map((_,index)=>({id:index+1,counter:0}))
};

export default function counter(state = initialState, action = {}) {
  let newList= state.items;
  let index = newList.findIndex(item=> item.id === action.payload);

  switch (action.type) {
    case types.INCREMENT:
      if(index>-1){
        newList[index].counter += 1;
      }
      return {
        ...state,
        items: newList
      };
    case types.DECREMENT:
      if(index>-1){
        newList[index].counter -= 1;
      }
      return {
        ...state,
        items: newList
      };
    default:
      return state;
  }
}
