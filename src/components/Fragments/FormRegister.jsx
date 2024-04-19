import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { EyeIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const FormRegister = () => {
  // Icons
  const eye = <EyeIcon className="absolute ms-72" width="20" height="20" />;

  return (
    <form action="">
      <InputForm label="Name" type="text" name="text" placeholder="Hanif Aji"></InputForm>
      <InputForm label="Email" type="email" name="email" placeholder="hanif@gmail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*************" icon={eye}></InputForm>
      <InputForm label="Confirm Password" type="password" name="confirmPassword" placeholder="*************" icon={eye}></InputForm>
      <Button classname="bg-secondary text-white hover:bg-primary duration-700">Register</Button>
      <div className="text-center text-xs mt-6">
        Already have an account?
        <Link to="/login" className="font-semibold ms-1">
          Log in now
        </Link>
      </div>
    </form>
  );
};

export default FormRegister;
