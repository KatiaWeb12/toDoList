import "./Input.css";
export default function Input({ value, onChangeHandler }) {
  return <input type="text" value={value} onChange={onChangeHandler} />;
}
