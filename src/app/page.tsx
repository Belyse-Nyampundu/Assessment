'use client'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import nextError from "next/error";
import useLogin from "./hooks/userLogin";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, error } = useLogin();
  const [formError, setFormError] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handleLogin({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex flex-col items-center -mb-52">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-left mb-4">
              Welcome back
            </h3>
            <h1 className="text-gray-800 text-left mb-4">Welcome back! Please enter your details</h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col items-start">
                <label className="text-[14px] text-gray-800  mt-10 font-semibold">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full md:w-[400px] h-[45px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600"
                />
              </div>
              <div className="mb-3 relative">
                <div className="mb-4 flex flex-col items-start">
                  <label className="text-[14px] text-gray-800 font-semibold">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="....."
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full md:w-[400px] h-[45px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 pr-12 ${
                      error ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute top-1/3 left-[50%] transform -translate-y-1/2 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-xl text-gray-600"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-xl text-gray-600"
                      />
                    )}
                  </button>
                </div>
              </div>
              {isSuccessMessage && (
          <p className="text-green-500 text-sm mb-3 ml-16">Login successful!</p>
        )}
              {error && (
                <p className="text-red-500 text-sm mb-3 ml-16">{error}</p>
              )}
              <div className="flex justify-between items-center mb-3 ml-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="Remember for 30 days"
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-gray-600 ml-2 text-lg"
                  >
                    Remember for 30 days
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-center ml-16">
                <p className="text-gray-600 text-sm md:text-base -mt-10">
                  <Link href="/forgot-password" className="text-teal-600 text-lg ml-48">
                    Forgot Password
                  </Link>
                </p>
              </div>
              <Link href={isSuccessMessage ? "/dashboard" : "/dashboard"}>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full md:w-[400px] h-[55px] bg-teal-600 text-white rounded-xl py-2 text-lg md:text-xl lg:text-2xl mt-4"
              >
                Log In
              </button>
              </Link>
              <p className="text-gray-600 mt-2 text-sm md:text-base ml-16 mt-12">
                Do not have an account?{" "}
                <Link href="/signup" className="text-teal-600">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
       <div className="lg:w-1/2 p-4 lg:ml-4 flex justify-center items-center">
  <div className="w-full">
    <div className="relative h-400">
      <Image
        src="/images/mou.jpeg"
        alt="Huza"
      
        width={500}
        height={400}
        className=""
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default LoginPage;