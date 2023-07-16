import { useEffect, useState } from "react";
import "./TaskList.css";
import TaskListItem from "../TaskListItem/TaskListItem";
export default function TaskList({ list, setList, filterStatus }) {
  const [filteredList, setFilteredList] = useState([]);
  function deleteHandler(el) {
    setList((prev) => prev.filter((item) => item.id !== el.id));
  }
  function listChange(change, editedTitle) {
    setList(() => {
      return list.map((el) =>
        change.title === el.title ? { ...el, title: editedTitle } : el
      );
    });
  }
  useEffect(() => {
    setFilteredList(
      list.filter((el) =>
        filterStatus === "all" ? el : el.status === filterStatus
      )
    );
  }, [filterStatus, list]);
  return (
    <div className="cont">
      {filteredList.length ? (
        <ul>
          {filteredList.map((el) => {
            return (
              <TaskListItem
                key={el.id}
                listChange={listChange}
                info={el}
                deleteHandler={() => deleteHandler(el)}
                setList={setList}
                list={list}
              />
            );
          })}
        </ul>
      ) : (
        <span className="empty">No Todo Found</span>
      )}
    </div>
  );
}
