const Button = ({ id, className, children, onClick }) => {
  return (
    <button onClick={onClick} id={id} className={className}>
      {children}
    </button>
  );
};

export default Button;
