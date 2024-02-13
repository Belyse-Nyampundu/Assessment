'use client'
import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useCreateUsers from "../hooks/userRegister";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Image from "next/image";

interface FormData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}
const SignupPage = () => {
  const { handleRegister, user, error } = useCreateUsers();
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  useEffect(()=>{
    if (user && router){
      router.push("/dashboard")
    }
  },[user, router]
  )
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "confirm_password") {
      if (formData.password !== value) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);
      }
    }
  };
  const togglePasswordVisibility = (field: string) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirm_password") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await handleRegister(formData);
  };
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row">
            <div className="basis-11/12 h-screen w-full h-full lg:w-1/4 flex justify-center items-center bg-purple-700 bg-opacity-95">
              <Image
                src="/images/mou.jpeg"
                alt="Signup Image"
                width={500}
                height={500}
                className="w-full h-full opacity-35"
              />
                <div className="absolute w-full h-full flex flex-col justify-center items-center">
                   <h1 className="text-white text-6xl font-bold pr-14">Start turning your <br/>ideas into reality.</h1>
                   <p className="text-white text-lg pt-12">Create a free account and get full access to all features for 30 days <br/>No credit card needed. Trusted by over 4,000 professionals </p>
                  
  </div>
            </div>
            <div className=" w-2/4 lg:w-1/3 p-4 ml-4">
              {/* <h2 className="text-3xl md:text-2xl text-gray-800 md:ml--1 rounded-md mb-5 ml-16">
                Sign up
              </h2> */}
              <h3 className="text-2xl mt-12 md:text-3xl font-semibold text-gray-800">
                Sign up
              </h3>
              <form className="mt-16" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col items-start">
  <label className="text-[14px] text-gray-800 font-semibold">First name*</label>
  <input
    type="text"
    name="firstname"
    placeholder="Name"
    value={formData.firstname}
    onChange={handleInputChange}
    className="w-full md:w-[400px] h-[40px] px-4 py-2 border border-gray-300 rounded-md mb-2 rounded-xl focus:outline-none focus:border-primary text-gray-600"
  />
</div>

<div className="mb-4 flex flex-col items-start">
  <label className="text-[14px] text-gray-800 font-semibold">Last name*</label>
  <input
    type="text"
    name="lastname"
    placeholder="Name"
    value={formData.lastname}
    onChange={handleInputChange}
    className="w-full md:w-[400px] h-[40px] px-4 py-2 border border-gray-300 rounded-md mb-2 rounded-xl focus:outline-none focus:border-primary text-gray-600"
  />
</div>
                <div className="mb-4 flex flex-col items-start">
                <label className="text-[14px] text-gray-800 font-semibold">Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full md:w-[400px] h-[40px] px-4 py-2 border border-gray-300 rounded-md mb-2 rounded-xl focus:outline-none focus:border-primary text-gray-600"
                />
                </div>
                <div className="mb-4 flex flex-col items-start">
                <label className="text-[14px] text-gray-800 font-semibold">Password*</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full md:w-[400px] h-[40px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 pr-12"
                />
                </div>
                <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <label
                    htmlFor="must be at least 8 characcters"
                    className="text-gray-600 -mt-8 text-base"
                  >
                    Must be at least 8 characters
                  </label>
                </div>
              </div>
                <div className="">
                  {/* <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={formData.confirm_password}
                    onChange={handleInputChange}
                    className={`w-full md:w-[520px] h-[55px] px-4 py-2 border ${passwordMatchError
                      ? "border-red-500"
                      : "border-gray-300"
                      } rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 pr-12 ml-16`}
                  /> */}
                  {/* <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                    style={{
                      color: "grey",
                      position: "absolute",
                      top: "35.5%",
                      right: "150px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                    onClick={() => togglePasswordVisibility("confirm_password")}
                  /> */}
                </div>
                {/* {passwordMatchError && (
                  <div className="text-red-500 ml-16 mt-2">
                    Passwords do not match.
                  </div>
                )} */}
                <button
                  type="submit"
                  className="w-full md:w-[400px] h-[40px] px-6 py-2 border bg-[#27779b] text-white rounded-md mb-12 mt-24 rounded-xl focus:outline-none focus:border-primary font-semibold"
                >
                  Get started
                </button>
              </form>
              {error && (
                <div className="text-red-500 ml-16 mt-2">{error}</div>
              )}
              {user && (
                <div className="text-red-500 ml-16 mt-2">{user.message}</div>
              )}
              <p className="text-gray-600 mt-8 md:ml-16">
                Already have an account?{" "}
                <Link href="/login" className="text-[#27779b] font-semibold">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
