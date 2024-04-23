import logo from "../../../assets/img/logo.png";

const Logo = (props) => {
  const { width = "100", height = "100", classname } = props;
  return <img src={logo} alt="Logo" width={width} height={height} className={`${classname}`} />;
};

export default Logo;
