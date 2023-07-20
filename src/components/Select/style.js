export default function getSelectStyle(fullWidth) {
  return {
    container: (styles) => ({ ...styles, width: fullWidth ? "100%" : "160px" }),
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "white",
      cursor: "pointer",
      borderColor: isFocused ? "#6472E8" : "hsl(0, 0%, 70%)",
      boxShadow: "none",
      ":hover": {
        ...styles[":hover"],
        borderColor: "#6472E8",
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#6472E8"
          : isFocused
          ? "#6472E8"
          : undefined,
        color: isSelected ? "white" : isFocused ? "white" : "black",
        cursor: "pointer",
      };
    },
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({ ...styles, textAlign: "left" }),
  };
}
