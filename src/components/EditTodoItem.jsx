import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import "../styles/EditTodoItem.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};
export function EditTodoItem({ initialValue, list, setList, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(initialValue);
  return (
    <div className="EditTodoItemContainer">
      <button onClick={() => setIsEditing(true)}>
        <RiEditBoxFill size="30px" />
      </button>
      <Modal
        style={customStyles}
        isOpen={isEditing}
        onRequestClose={() => setIsEditing(false)}
      >
        <button className="CloseButton" onClick={() => setIsEditing(false)}>
          <AiOutlineCloseCircle size="25px" />
        </button>
        <div className="ModalContentWraper">
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button
            onClick={() => {
              setIsEditing(false);
              setList(
                list.map((toDo) =>
                  toDo.id === id //
                    ? { ...toDo, input: editedValue }
                    : toDo
                )
              );
            }}
          >
            შენახვა
          </button>
        </div>
      </Modal>
    </div>
  );
}
