import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./ModalWindow.css";
import close from "../../static/close.png";
import Select from "../Select/Select";
import { OPTIONS } from "../../constants";
export default function ModalWindow({
  modalControl,
  taskHandler,
  title,
  status,
}) {
  const [taskName, setTaskName] = useState(title);
  const [taskStatus, setTaskStatus] = useState(status);
  const [disabled, setDisabled] = useState(false);
  function changeTaskNameHandler(event) {
    setTaskName(event.target.value);
  }
  function closeHandler({ target }) {
    if (target.classList.contains("modalCont")) modalControl();
  }
  useEffect(() => {
    if (title) {
      let isEmptyTitle = !Boolean(taskName);
      let changedTitle = title !== taskName;
      let changedStatus = status !== taskStatus;
      setDisabled((!changedTitle && !changedStatus) || isEmptyTitle);
    } else {
      setDisabled(!Boolean(taskName));
    }
  }, [taskName, taskStatus, title, status]);
  return (
    <div className="modalCont" onClick={closeHandler}>
      <div className="modalWindow">
        <div className="closeWindow" onClick={modalControl}>
          <img src={close} alt="" />
        </div>
        <div className="modalInfo">
          <h2>{title ? "Update Task" : "Add Task"}</h2>
          <div className="params">
            <div className="param">
              <p>Title</p>
              <Input value={taskName} onChangeHandler={changeTaskNameHandler} />
            </div>
            <div className="param">
              <p>Status</p>
              <Select
                status={taskStatus}
                changeStatus={setTaskStatus}
                variant="modalSelect"
                options={OPTIONS.filter((el) => el.value !== "all")}
                fullWidth
              />
            </div>
          </div>
          <div className="windowButtons">
            <Button
              text={title ? "Update" : "Create"}
              variant="primary"
              disabled={disabled}
              clickHandler={() => taskHandler(taskName, taskStatus)}
            />
            <Button
              text="Cancel"
              variant="secondary"
              clickHandler={modalControl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
