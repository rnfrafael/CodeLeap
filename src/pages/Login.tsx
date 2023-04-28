import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userNameContext } from "../contexts/userNameContext";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
  userName: z.string().nonempty(),
});

type formData = z.infer<typeof formSchema>;

export function Login() {
  const { setUserName, userSave } = useContext(userNameContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: formData) => {
    const userToSave = { userName: data.userName, id: uuidv4() };
    setUserName && setUserName(userToSave);
    userSave && userSave(userToSave);
    navigate("/MainPage");
  };

  return (
    <div className="w-500 h-fit p-6 rounded-2xl m-auto border-2 border-gray-200">
      <h1 className="text-xl font-bold leading-6 mb-6">
        Welcome to CodeLeap network!
      </h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label
            htmlFor="userName"
            className="block mb-2 text-base font-normal"
          >
            Please enter your username
          </label>
          <input
            type="text"
            id="userName"
            className="border mb-4 border-gray-400 text-sm rounded-lg focus:ring-blueCode focus:border-blueCode block w-full p-2.5 placeholder:font-thin"
            placeholder="John doe"
            {...register("userName", { required: true })}
          />
          {errors.userName && <span>{errors.userName.message}</span>}
        </div>
        <button
          disabled={!isValid}
          type="submit"
          className="text-white w-28 font-bold leading-4  bg-blueCode hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          ENTER
        </button>
      </form>
    </div>
  );
}

// box-sizing: border-box;

// position: absolute;
// width: 500px;
// height: 205px;
// left: 710px;
// top: 439px;

// background: #FFFFFF;
// border: 1px solid #CCCCCC;
// border-radius: 16px;
