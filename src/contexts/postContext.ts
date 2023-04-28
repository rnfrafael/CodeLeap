import { createContext } from "react";
import { IPosts } from "../repositories/postRepository";

export interface IPostsContext {
  posts: IPosts[];
  setPosts?: (posts: IPosts[] | any) => void;
  postSave?: (post: IPosts) => void;
  postRemove?: (id: string) => void;
}

export const postContext = createContext<IPostsContext>({
  posts: [],
});
