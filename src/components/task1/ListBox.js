import { useDispatch, useSelector } from "react-redux";
import cross from "../../assets/cross.png";
import { addList1, addList2 } from "../../store/ListAction";
import './listBox.css'
const ListBox = ({ listNumber }) => {
  const data = useSelector((state) => state.listData);
  const dispatch = useDispatch();
  const remove = (index) => {
    if (listNumber === 1) {
      const l1 = data.list1;
      l1.splice(index, 1);
      dispatch(addList1(l1));
    } else if (listNumber === 2) {
      const l2 = data.list2;
      l2.splice(index, 1);
      dispatch(addList2(l2));
    }
  };
  return (
    <div className="scrollContainer">
      <ul className="itemList">
        {listNumber === 1
          ? data.list1.map((item, index) => {
              return (
                <div className="listItem">
                  <li key={index}>{item}</li>
                  <img
                    alt="cross"
                    src={cross}
                    className="listCross"
                    onClick={() => remove(index)}
                  />
                </div>
              );
            })
          : data.list2.map((item, index) => {
              return (
                <div className="listItem">
                  <li key={index}>{item}</li>
                  <img
                    alt="cross"
                    src={cross}
                    className="listCross"
                    onClick={() => remove(index)}
                  />
                </div>
              );
            })}
      </ul>
    </div>
  );
};
export default ListBox;
