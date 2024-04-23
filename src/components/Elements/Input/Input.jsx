const Input = (props) => {
  const { placeholder, type, name, onChange = () => {} } = props;
  return <input className="text-sm border rounded-md w-full py-3 px-3 text-slate-700 placeholder:opacity-50" type={type} placeholder={placeholder} name={name} onChange={onChange} />;
};

export default Input;
