import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import TaskList from "./components/TaskList/TaskList";
import Select from "./components/Select/Select";
import getFormattedDate from "./helpers/getFormattedDate";
import saveToLocalStorage from "./helpers/saveToLocalStorage.js";
import getFromLocalStorage from "./helpers/getFromLocalStorage";
import { OPTIONS } from "./constants";
function App() {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  function addTask(title, status) {
    setList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          title,
          status,
          date: getFormattedDate(new Date()),
        },
      ];
    });
    modalControl();
  }
  function modalControl() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    setList(getFromLocalStorage() || []);
  }, []);
  useEffect(() => {
    saveToLocalStorage(list);
  }, [list]);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="addTaskConfig">
        <Button text="Add task" variant="primary" clickHandler={modalControl} />
        <Select
          variant="filterSelect"
          status={filterStatus}
          changeStatus={setFilterStatus}
          options={OPTIONS}
        />
      </div>
      <TaskList
        list={list}
        setList={setList}
        filterStatus={filterStatus}
      ></TaskList>
      {isOpen && (
        <ModalWindow
          modalControl={modalControl}
          taskHandler={addTask}
          title=""
          status={OPTIONS[1].value}
        />
      )}
    </div>
  );
}

export default App;
