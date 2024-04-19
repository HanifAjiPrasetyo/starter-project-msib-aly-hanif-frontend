import logo from "../../../assets/img/logo.png";

const Logo = (props) => {
  const { width, height } = props;
  return <img src={logo} alt="Logo" width={width} height={height} className="mx-auto mb-8" />;
};

export default Logo;
