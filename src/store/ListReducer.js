import { ADD_LIST1, ADD_LIST2 } from "./ListAction";

const initialState = {
  list1: [],
  list2: [],
};
const ListData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST1: {
      return {
        ...state,
        list1: action.list1,
      };
    }
    case ADD_LIST2: {
      return {
        ...state,
        list2: action.list2,
      };
    }
    default: {
      return state;
    }
  }
};
export default ListData;
