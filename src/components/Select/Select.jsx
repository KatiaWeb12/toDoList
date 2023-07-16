import classNames from "classnames";
import "./Select.css";

export default function Select({ variant, status, changeStatus }) {
  let optionList = [
    { value: "all", title: "ALL" },
    { value: "created", title: "CREATED" },
    { value: "in_progress", title: "IN PROGRESS" },
    { value: "completed", title: "COMPLETED" },
  ];
  function changeStatusHandler({ target }) {
    changeStatus(target.value);
  }
  return (
    <select
      name=""
      id=""
      onChange={(event) => changeStatusHandler(event)}
      className={classNames("select", variant)}
      value={status}
    >
      {optionList
        .filter((el) => (variant !== "filterSelect" ? el.value !== "all" : el))
        .map(({ value, title }) => (
          <option key={title} value={value}>
            {title}
          </option>
        ))}
    </select>
  );
}
