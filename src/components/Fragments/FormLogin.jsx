import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { EyeIcon } from "@heroicons/react/16/solid";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  // Icons
  const eye = <EyeIcon className="absolute ms-72" width="20" height="20" />;

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    localStorage.setItem("name", "Hanif Aji Prasetyo");
    navigate("/profile");
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" name="email" placeholder="hanif@gmail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*************" icon={eye}></InputForm>
      <div className="flex justify-between mb-6 text-xs">
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            className=" appearance-none checked:bg-secondary after:content-['✓'] after:text-white after:hidden after:text-center after:text-[9.2px] checked:after:block w-4 h-4 rounded border"
            id="remember"
            name="remember"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a href="" className="no-underline font-semibold">
          Forgot Password?
        </a>
      </div>
      <Button classname="bg-secondary text-white hover:bg-primary duration-700" type="submit">
        Login
      </Button>
      <div className="text-center text-xs mt-6">
        Not registered yet?
        <Link to="/register" className="font-semibold ms-1">
          Create an account
        </Link>
      </div>
    </form>
  );
};

export default FormLogin;
