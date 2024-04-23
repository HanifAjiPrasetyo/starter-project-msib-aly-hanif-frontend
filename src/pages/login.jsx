import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" desc="Welcome! Log in to continue">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
