import Logo from "../Elements/Logo";

const AuthLayout = (props) => {
  const { title, desc, children } = props;
  return (
    <div className="flex justify-center items-center min-h-screen font-montserrat bg-slate-50">
      <div className="w-full max-w-sm rounded-md shadow py-8 px-8 bg-white">
        <Logo width="100" height="100"></Logo>
        <div className="text-center mb-8">
          <div className="font-bold text-md mb-1">{title}</div>
          <p className="text-sm">{desc}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
