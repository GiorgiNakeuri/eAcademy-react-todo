import { MdDeleteForever } from "react-icons/md";
import { AiFillCheckSquare } from "react-icons/ai";
import { EditTodoItem } from "./EditTodoItem";
import { Reorder } from "./Reorder";
import "../styles/TodoList.css";

export function TodoList({ list, setList }) {
  return (
    <ul>
      {list.map((toDoEntryObject) => {
        return (
          <li
            key={toDoEntryObject.id}
            style={
              toDoEntryObject.isDone ? { textDecoration: "line-through" } : {} //თუ isDone არის თრუ ვადებ სიესეს მნიშვნელობას ელემენტს და ვუსვამ ხაზს
            }
          >
            <Reorder list={list} setList={setList} id={toDoEntryObject.id} />
            <input
              type="checkbox"
              onClick={(event) =>
                setList(
                  list.map((toDo) =>
                    toDo.id === toDoEntryObject.id
                      ? { ...toDo, isChecked: event.target.checked }
                      : toDo
                  )
                )
              }
            />
            <p>{toDoEntryObject.input}</p>

            <button
              onClick={() =>
                setList(
                  list.map((toDo) =>
                    toDo.id === toDoEntryObject.id
                      ? { ...toDo, isDone: true } //ფუნქციით ვნიშნავთ ტასკს დასრულებულად და აღარ არის შესაძლებეიდასრულების გაუქმება, დასრულების გაუქმების მოთხოვნა არ ყოფილა დავალებაში.
                      : toDo
                  )
                )
              }
            >
              <AiFillCheckSquare size="30px" />
            </button>
            <EditTodoItem
              initialValue={toDoEntryObject.input}
              list={list}
              setList={setList}
              id={toDoEntryObject.id}
            />

            <button
              onClick={() => {
                setList(
                  list.filter((toDo) => toDo.id !== toDoEntryObject.id) // აქ ლისტს ვფილტრავ აიდის მიხედვით რათა წავშალო ის ელემენტი რომელზეც დავაკლიკე
                );
              }}
            >
              <MdDeleteForever size="30px" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
