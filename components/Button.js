const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.callback()
      }}
      style={{
        backgroundColor: props.isAnOperation ? "#f5923e" : "#e0e0e0",
        border: "none",
        color: props.isAnOperation ? "#ffffff" : "#000000",
        fontSize: "75px",
        gridArea: props.gridArea,
        outline: "none",
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
