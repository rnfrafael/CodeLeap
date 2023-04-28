import { createContext } from "react";
import { IUsers } from "../repositories/usersRepository";

interface IUserNameContext {
  user?: IUsers;
  setUserName?: (userName: IUsers) => void;
  userSave?: (post: IUsers) => void;
  userRemove?: (id: string) => void;
}

export const userNameContext = createContext<IUserNameContext>({});
