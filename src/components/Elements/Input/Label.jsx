const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 text-sm mb-2">
      {children}
    </label>
  );
};

export default Label;
