import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostAdd } from "../components/PostAdd";
import PostsList from "../components/PostsList";
import { userNameContext } from "../contexts/userNameContext";
export function MainPage() {
  const { user } = useContext(userNameContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return (
    <div className="flex flex-col w-800 gap-6">
      <div className="flex bg-blueCode w-full h-20 m-auto items-center">
        <h1 className="ml-6 font-bold text-xl text-white">CodeLeap Network</h1>
      </div>
      <div className=" px-6 h-fit flex flex-col ">
        <PostAdd />
      </div>
      <div className="px-6 h-fit flex flex-col">
        <PostsList />
      </div>
    </div>
  );
}
