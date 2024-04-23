import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder, icon = "", onChange = () => {} } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex items-center">
        <Input type={type} name={name} placeholder={placeholder} onChange={onChange} />
        {icon}
      </div>
    </div>
  );
};

export default InputForm;
