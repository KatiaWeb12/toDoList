import classNames from "classnames";
import "./Button.css";
export default function Button({
  text,
  variant,
  icon,
  clickHandler,
  disabled,
  img,
  withoutBack,
}) {
  return (
    <>
      {icon ? (
        <button></button>
      ) : (
        <button
          disabled={disabled}
          className={classNames("button", variant, { disabled, withoutBack })}
          onClick={clickHandler}
        >
          {img && <img src={img}></img>}
          {text}
        </button>
      )}
    </>
  );
}
