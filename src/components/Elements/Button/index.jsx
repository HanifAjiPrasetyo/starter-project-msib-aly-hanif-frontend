const Button = (props) => {
  const { children, classname, type, onClick = () => {} } = props;
  return (
    <button className={`px-6 h-10 w-full font-montserrat ${classname} rounded-md text-sm`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
