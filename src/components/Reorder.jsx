import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
import "../styles/Reorder.css";

export function Reorder({ list, setList, id }) {
  const itemIndex = list.findIndex((entry) => entry.id === id);
  const listCopy = [...list];

  const handleUpvote = () => {
    if (itemIndex === 0) return;

    const itemAbove = listCopy[itemIndex - 1];
    listCopy[itemIndex - 1] = listCopy[itemIndex];
    listCopy[itemIndex] = itemAbove;

    setList(listCopy);
  };
  const handleDownvote = () => {
    console.log(list);
    if (itemIndex === list.length - 1) return;

    const itemBelow = listCopy[itemIndex + 1];
    listCopy[itemIndex + 1] = listCopy[itemIndex];
    listCopy[itemIndex] = itemBelow;

    setList(listCopy);
  };

  return (
    <div className="ReorderButtonsContainer">
      <button onClick={handleUpvote}>
        <BsFillArrowUpSquareFill size="25px" color="#26a1e9" />
      </button>
      <button onClick={handleDownvote}>
        <BsFillArrowDownSquareFill size="25px" color="#e029b9" />
      </button>
    </div>
  );
}
