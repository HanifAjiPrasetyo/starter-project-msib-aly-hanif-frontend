const Avatar = (props) => {
  const { src, width, height } = props;
  return <img src={src} alt="Avatar" width={width} height={height} className="rounded-full" />;
};

export default Avatar;
