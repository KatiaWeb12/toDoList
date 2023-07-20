import Select from "react-select";
import getSelectStyle from "./style";
export default function CustomSelect({
  status,
  changeStatus,
  options,
  fullWidth,
}) {
  const colourStyles = getSelectStyle(fullWidth);
  return (
    <Select
      options={options}
      defaultValue={options.find((el) => el.value === status)}
      onChange={(newValue) => {
        changeStatus(newValue.value);
      }}
      styles={colourStyles}
      isSearchable={false}
    />
  );
}
