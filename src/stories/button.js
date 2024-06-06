const defaultStyle = {
  color: "blue",
};

const Button = ({ ...othreProps }) => (
  <button style={defaultStyle} {...othreProps}>Click-me</button>
);
