import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { useState } from "react";
import { useAuth } from "../components/Auth/AuthProvider";

const LoginPage = () => {
  const [input, setInput] = useState({
    email: "hanif@gmail.com",
    password: "password",
  });

  const auth = useAuth();

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("Please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AuthLayout title="Login" desc="Welcome! Log in to continue">
      <FormLogin onSubmit={handleSubmitEvent} onChange={handleInput} />
    </AuthLayout>
  );
};

export default LoginPage;
