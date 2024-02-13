import { useState } from 'react';
import { loginUser } from '../utilities/utils';
import { useRouter } from 'next/navigation';
import { NextResponse, type NextRequest } from 'next/server'

interface FormData {
  email: string;
  password: string;
}

const usePostLogin = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const router = useRouter()
  const loggedOutPath = ["/dashboard"];
  const login = ["/signup"]
  const handleLogin = async (formData: FormData) => {
    setError("");
    setIsLoading(true);

  
    try {
      const response = await loginUser(formData);
      if (response.response){
        if (response.response.id && response.response.token) { 
             console.log("Login successful:", response.data);
                 setIsSuccessMessage(true);
            //    localStorage.setItem("token", response.response.token)

             
              
                 router.push("/dashboard")
               }else{
                setError("something went wrong")
               }
       console.log(response,"response 2")
      }else{
        setError(response.message)
    
      }
  
    //   if (response.response.id && response.response.token) { 
    //     console.log("Login successful:", response.data);
    //     setIsSuccessMessage(true);
    //     router.push("/dashboard")
    //   } else {
    //     // setError(response.message || "Login failed");
    //     console.log(response,"response")
    //   }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, error, isLoading };
};

export default usePostLogin;