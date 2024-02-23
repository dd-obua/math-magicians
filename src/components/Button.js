const Button = ({ id, className, children, handleClick }) => {
  return (
    <button id={id} className={className}>
      {children}
    </button>
  );
};

export default Button;
