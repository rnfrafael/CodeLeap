import { useContext } from "react";
import { Link } from "react-router-dom";
import { userNameContext } from "../contexts/userNameContext";

export function NavBar() {
  const userName = useContext(userNameContext);
  return (
    <div className="w-full">
      <nav className="border-gray-200 bg-gray-900 w-full flex">
        <div className="w-full flex flex-wrap items-center justify-center p-4">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/MainPage"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                MainPage
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-fit whitespace-nowrap text-white items-center justify-center px-4">
          <p>Olá {userName.user?.userName}</p>
        </div>
      </nav>
    </div>
  );
}
