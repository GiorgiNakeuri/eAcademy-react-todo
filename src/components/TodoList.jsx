import { EditTodoItem } from "./EditTodoItem";
import { Reorder } from "./Reorder";
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
            {toDoEntryObject.input}
            <button
              onClick={() => {
                setList(
                  list.filter((toDo) => toDo.id !== toDoEntryObject.id) // აქ ლისტს ვფილტრავ აიდის მიხედვით რათა წავშალო ის ელემენტი რომელზეც დავაკლიკე
                );
              }}
            >
              X
            </button>
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
              დასრულებულად მონიშვნა
            </button>
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
            <EditTodoItem
              initialValue={toDoEntryObject.input}
              list={list}
              setList={setList}
              id={toDoEntryObject.id}
            />

            <Reorder list={list} setList={setList} id={toDoEntryObject.id} />
          </li>
        );
      })}
    </ul>
  );
}
