import { useState } from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import InputBox from "./InputBox";
import type { SignupInput } from "@suyash5053/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputs);
      navigate("/signin");
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Title text="Create an Account" />
      <Subtitle
        text="Already have an account?"
        linkText="Login"
        href="/signin"
      />
      <div className="flex flex-col gap-4">
        <InputBox
          label="Name"
          placeholder="Enter your name"
          onChange={(e) =>
            setInputs((c) => ({
              ...c,
              name: e.target.value,
            }))
          }
        />
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
