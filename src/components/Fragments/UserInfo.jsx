import Avatar from "../Elements/Avatar";

const UserInfo = (props) => {
  const { name, age, city, posts, followers, photos, src } = props;
  return (
    <div className="flex flex-col gap-5 justify-center text-center">
      <center>
        <Avatar src={src} width="80" height="80"></Avatar>
      </center>
      <div className="font-bold text-md">{name}</div>
      <div className="text-xs">
        {age} yo • {city}
      </div>
      <div className="flex justify-center gap-5">
        <div className="flex flex-col items-center">
          <div className="font-semibold">{posts}</div>
          POSTS
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold">{followers}</div>
          FOLLOWERS
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold">{photos}</div>
          PHOTOS
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
