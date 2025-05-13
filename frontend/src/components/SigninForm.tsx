import { useState } from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import InputBox from "./InputBox";
import type { SigninInput } from "@suyash5053/medium-common";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const SigninForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        inputs,
      );
      const jwt = response.data;
      localStorage.setItem("token", `Bearer ${jwt.token}`);
      navigate("/blogs");
    } catch (e) {
      alert("Something wrong happened");
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <Title text="Login to your account" />
      <Subtitle
        text="Don't have an account?"
        linkText="Register"
        href="/signup"
      />
      <div className="flex flex-col gap-4">
        <InputBox
          label="Email"
          placeholder="Enter your email"
          onChange={(e) =>
            setInputs((c) => ({
              ...c,
              email: e.target.value,
            }))
          }
        />
        <InputBox
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) =>
            setInputs((c) => ({
              ...c,
              password: e.target.value,
            }))
          }
        />
        <button
          type="submit"
          className="w-full p-2 bg-black text-white font-semibold rounded-md cursor-pointer"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SigninForm;
