import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder, icon = "" } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex items-center">
        <Input type={type} name={name} placeholder={placeholder} />
        {icon}
      </div>
    </div>
  );
};

export default InputForm;
