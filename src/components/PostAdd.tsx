import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { postContext } from "../contexts/postContext";
import { userNameContext } from "../contexts/userNameContext";
import { v4 as uuidv4 } from "uuid";
import { postRepository } from "../repositories/postRepository";

const postSchema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
});

type postData = z.infer<typeof postSchema>;

export const PostAdd = () => {
  const { setPosts, postSave } = useContext(postContext);
  const { user } = useContext(userNameContext);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<postData>({ resolver: zodResolver(postSchema) });

  const onSubmit = (data: postData) => {
    if (!user) return;
    const post = {
      id: uuidv4(),
      title: data.title,
      content: data.content,
      userId: user.id,
      postedAt: new Date(),
    };
    postSave && postSave(post);
    setPosts && setPosts(postRepository);
    resetField("title");
    resetField("content");
  };

  return (
    <div className="w-full h-fit p-6 rounded-2xl m-auto border-1 border-gray-500">
      <h1 className="text-xl font-bold leading-6 mb-6">What’s on your mind?</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="title" className="block mb-2 text-base font-normal">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border mb-4 border-gray-400 h-8 text-sm rounded-lg focus:ring-blueCode focus:border-blueCode block w-full p-2.5 placeholder:font-thin"
            placeholder="Hello World"
            {...register("title", { required: true })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className="mb-2">
          <label htmlFor="content" className="block mb-2 text-base font-normal">
            Content
          </label>
          <textarea
            id="content"
            className="border mb-4 border-gray-400 text-sm rounded-lg h-16 focus:ring-blueCode focus:border-blueCode block w-full p-2.5 placeholder:font-thin"
            placeholder="Content here"
            {...register("content", { required: true })}
          />
          {errors.content && <span>{errors.content.message}</span>}
        </div>
        <button
          disabled={!isValid}
          type="submit"
          className="text-white w-28 font-bold leading-4  bg-blueCode hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Create
        </button>
      </form>
    </div>
  );
};
