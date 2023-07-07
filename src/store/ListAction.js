export const ADD_LIST1 = "ADD_LIST1";
export const ADD_LIST2 = "ADD_LIST2";
export const addList1 = (list1) => {
  return {
    type: ADD_LIST1,
    list1,
  };
};
export const addList2 = (list2) => {
  return {
    type: ADD_LIST2,
    list2,
  };
};
