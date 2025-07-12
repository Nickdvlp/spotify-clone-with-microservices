import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../components/context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const { registerUser, btnLoading } = useUserData();

  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(name, email, password, navigate);
  };
  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Register to Spotify
        </h2>
        <form className="mt-8" onSubmit={submitHandler}>
          <div className="mb-4 ">
            <label className=" block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 ">
            <label className=" block text-sm font-medium mb-1">
              Email or username
            </label>
            <input
              type="email"
              placeholder="Email or username"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label className=" block text-sm font-medium mb-1">Password</label>

            <input
              type={type}
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {type === "password" ? (
              <button
                className="absolute  bottom-3 right-3"
                onClick={(e) => {
                  e.preventDefault();
                  setType("text");
                }}
              >
                <FaEye />
              </button>
            ) : (
              <button
                className="absolute bottom-3 right-3"
                onClick={(e) => {
                  e.preventDefault();
                  setType("password");
                }}
              >
                <FaEyeSlash />
              </button>
            )}
          </div>
          <button className="auth-btn" disabled={btnLoading}>
            {btnLoading ? "Please wait..." : "Register"}
          </button>
        </form>
        <div className="text-center mt-6">
          <Link
            to={"/login"}
            className="text-sm text-gray-400 hover:text-gray-300"
          >
            Have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
