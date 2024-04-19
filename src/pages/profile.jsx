import headerImg from "../assets/img/headerImage.png";
import UserInfo from "../components/Fragments/UserInfo";
import avatar from "../assets/img/avatar.png";
import PostCard from "../components/Fragments/PostCard";
import Button from "../components/Elements/Button";
import React, { useEffect } from "react";
import { useAuth } from "../components/Auth/AuthProvider";

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <div className="flex flex-col justify-center font-montserrat">
      <button
        className="bg-red-500 px-3 py-2 w-20 text-white rounded absolute right-3 top-3 text-sm"
        onClick={() => {
          if (window.confirm("Apakah Anda yakin ingin logout?")) {
            auth.logOut();
          }
        }}
      >
        Logout
      </button>
      <img src={headerImg} alt="HeaderImage" className="w-full max-h-[200px]" />
      <div className="relative -top-14">
        <UserInfo name="Hanif Aji Prasetyo" age="22" city="Blitar" posts="111" followers="111" photos="111" src={avatar}></UserInfo>
      </div>
      <div className="m-auto">
        <div className="font-bold text-lg mb-5">Recent Posts</div>
        <PostCard
          src={avatar}
          name="Hanif Aji Prasetyo"
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
