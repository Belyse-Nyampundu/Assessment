
interface LoginData{
    email:string;
    password:string;
  }
  export const loginUser = async (loginData: LoginData) => {
    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      // Check for network errors (optional, but good practice)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Manually parse the response and handle potential JSON parsing errors
      const text = await response.text();
      try {
        const result = JSON.parse(text);
        return result;
      } catch (error) {
        throw new Error('Failed to parse JSON response');
      }
    } catch (error) {
      // Handle other errors here (e.g., log the error, provide informative message to user)
      console.error('Error during login:', error);
      throw new Error('Failed to log in');
    }
  };
  
    interface FormData {
        firstname: string;
        lastname:string;
        email: string;
        password: string;
    }
    export const registerUser = async (formData: FormData) => {
      const url = '/api/signup';
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        console.log(response,"result1")
        result.success = response.status == 201 ? true : false
        return result;
      } catch (error: any) {
        console.log(error,"error2")
        throw new Error(error);
      }
    };
  