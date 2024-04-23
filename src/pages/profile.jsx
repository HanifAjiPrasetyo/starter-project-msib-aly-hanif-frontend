import headerImg from "../assets/img/headerImage.png";
import UserInfo from "../components/Fragments/UserInfo";
import avatar from "../assets/img/avatar.png";
import PostCard from "../components/Fragments/PostCard";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    navigate("/login");
  };
  return (
    <div className="flex flex-col justify-center font-montserrat">
      <button
        className="bg-primary font-semibold px-5 py-3 text-white rounded-lg absolute right-3 top-3 duration-700 text-sm hover:bg-secondary"
        onClick={() => {
          if (window.confirm("Apakah Anda yakin ingin logout?")) {
            handleLogout();
          }
        }}
      >
        Logout
      </button>
      <img src={headerImg} alt="HeaderImage" className="w-full max-h-[200px]" />
      <div className="relative -top-14">
        <UserInfo name={localStorage.getItem("name")} age="22" city="Blitar" posts="111" followers="111" photos="111" src={avatar}></UserInfo>
      </div>
      <div className="m-auto">
        <div className="font-bold text-lg mb-5">Recent Posts</div>
        <PostCard
          src={avatar}
          name={localStorage.getItem("name")}
          age="22"
          city="Blitar"
          time="15 min"
          title="Lorem Ipsum"
          body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dicta. Dignissimos voluptatem, repellat repellendus commodi error esse eaque pariatur ipsum!"
          comments="11"
        ></PostCard>
      </div>
    </div>
  );
};

export default ProfilePage;
