import { useState } from "react";

export function EditTodoItem({ initialValue, list, setList, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(initialValue);
  return (
    <div>
      <button onClick={() => setIsEditing(true)}>რედაქტირება</button>
      {isEditing && (
        <div>
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
      )}
    </div>
  );
}
