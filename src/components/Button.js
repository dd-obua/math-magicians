const Button = ({ id, className, children }) => {
  return (
    <button id={id} className={className}>
      {children}
    </button>
  );
};

export default Button;
