import { useState } from "react";
import { NavBar } from "./components";
import { Login, MainPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userNameContext } from "./contexts/userNameContext";
import { postContext } from "./contexts/postContext";
import { IPosts } from "./repositories/postRepository";
import { IUsers, userRemove, userSave } from "./repositories/usersRepository";
import { postSave, postRemove } from "./repositories/postRepository";

export function App() {
  const [user, setUserName] = useState<IUsers | undefined>();
  const [posts, setPosts] = useState<IPosts[]>([]);

  return (
    <userNameContext.Provider
      value={{ user, setUserName, userSave, userRemove }}
    >
      <postContext.Provider value={{ posts, setPosts, postSave, postRemove }}>
        <div className="flex flex-col w-full h-screen items-center">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index element={<Login />} />
              <Route path="/" element={<Login />}></Route>
              <Route path="/mainpage" element={<MainPage />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </postContext.Provider>
    </userNameContext.Provider>
  );
}
