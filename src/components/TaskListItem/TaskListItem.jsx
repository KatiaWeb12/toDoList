import { useState, useEffect } from "react";
import "./TaskListItem.css";
import Button from "../Button/Button";
import Rubbish from "../../static/rubish.png";
import Edit from "../../static/edit.png";
import Watch from "../../static/watch.png";
import ModalWindow from "../ModalWindow/ModalWindow";
import { OPTIONS } from "../../constants";
export default function TaskListItem({
  info,
  deleteHandler,
  listChange,
  setList,
  list,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState(false);
  function editControl() {
    setIsEdit(!isEdit);
  }
  function changeStatusByTick(newStatus) {
    setList(
      list.map((el) => {
        if (el.id === info.id) el.status = newStatus;
        return el;
      })
    );
  }
  function handleChange() {
    setChecked(!checked);
    changeStatusByTick(!checked ? "completed" : "created");
  }
  function updateTask(taskName, taskStatus) {
    setList(
      list.map((el) =>
        el.id === info.id ? { ...el, status: taskStatus, title: taskName } : el
      )
    );
    editControl();
  }
  useEffect(() => {
    setChecked(info.status === "completed" ? true : false);
  }, [info.status]);
  return (
    <li key={info.id}>
      <div className="taskListItem">
        <div className="info">
          <input
            type="checkbox"
            className="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <div className="taskInfo">
            <h2 className={checked ? "textCrossedOut" : "notTextCrossedOut"}>
              {info.title}
            </h2>
            <p className="date">{info.date}</p>
          </div>
        </div>
        <div className="icons">
          {info.status === "in_progress" && (
            <Button img={Watch} variant="iconButton" disabled withoutBack />
          )}
          <Button
            clickHandler={deleteHandler}
            img={Rubbish}
            variant="iconButton"
          />
          <Button clickHandler={editControl} img={Edit} variant="iconButton" />
        </div>
      </div>
      {isEdit && (
        <ModalWindow
          taskHandler={updateTask}
          modalControl={editControl}
          title={info.title}
          status={OPTIONS.find((el) => el.value === info.status).value}
        />
      )}
    </li>
  );
}
