import { useContext, useEffect } from "react";
import { postContext } from "../contexts/postContext";
import { userNameContext } from "../contexts/userNameContext";
import { postRepository } from "../repositories/postRepository";
import { usersRepository } from "../repositories/usersRepository";
import { Trash, PencilSimple } from "@phosphor-icons/react";

export default function PostsList() {
  const { posts, setPosts } = useContext(postContext);
  const userContext = useContext(userNameContext);
  useEffect(() => {
    setPosts && setPosts(postRepository);
    console.log(posts);
  });

  // const deletePost = (id: string) => {};

  return (
    <div className="w-full h-fit flex flex-col rounded-2xl m-auto gap-6">
      {posts.map((post) => {
        const user = usersRepository.find((user) => user.id === post.userId);
        // console.log(user, "user");
        // console.log(post, "post");
        // console.log(usersRepository, "usersRepository");
        return (
          <div className="flex flex-col w-full h-fit rounded-2xl m-auto border-1 border-gray-500">
            <div className="flex flex-row w-full h-16 rounded-t-2xl bg-blueCode font-bold text-xl items-center p-6 text-white justify-between">
              <p>{post.title}</p>
              {userContext.user?.id === post.userId && (
                <div className="flex gap-4">
                  <Trash
                    className="cursor-pointer"
                    size={20}
                    // onClick={() => deletePost(post.id)}
                  />

                  <PencilSimple size={20} />
                </div>
              )}
            </div>
            <div className="flex flex-col p-6 gap-4">
              <div className="flex justify-between">
                <p className="text-base text-gray-400 font-bold">
                  @{user?.userName}
                </p>
                <p className="text-base text-gray-400">
                  {/* {new Date().toISOString().slice(11, 16)} */}
                  {post.postedAt.toLocaleTimeString().slice(0, 5)}
                </p>
              </div>
              <p className="text-base">{post.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
