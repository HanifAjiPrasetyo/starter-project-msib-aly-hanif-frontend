import Avatar from "../Elements/Avatar";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/16/solid";

const PostCard = (props) => {
  const { name, age, city, src, time, title, body, comments } = props;

  return (
    <div className="max-w-2xl shadow-lg border rounded-md px-8 py-9">
      <div className="flex gap-5 mb-5 items-center">
        <Avatar src={src} width="50" height="50"></Avatar>
        <div className="flex flex-col">
          <div className="text-sm">
            <span className="font-bold">{name}</span> • {age} yo
          </div>
          <div className="text-xs">
            {time} ago • {city}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xs w-full">{body}</div>
        <hr />
        <div className="flex justify-between text-xs">
          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftIcon width="20" height="20"></ChatBubbleOvalLeftIcon>
            {comments}
          </div>
          <a href="" className="no-underline font-semibold">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
