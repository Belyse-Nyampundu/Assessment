'use client'

// import ParentComponent from "../Components/ParentGraph"
// import Users from "../Components/Users"
import Layout from "../components/Layout"


const Dashboard = ()=>{
    // const token = localStorage.getItem("token")
    // console.log(token)
    return(
  <Layout>
        <div>
            {/* <Users/>
            <ParentComponent/> */}
            {/* <Layout children={undefined}/> */}
        </div>
        </Layout>
    )
}
export default Dashboard;
// 'use client'
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// // import ParentComponent from "../Components/ParentGraph";
// // import Users from "../Components/Users";
// import Layout from "../components/Layout";

// const Dashboard = () => {
//   const router = useRouter();
//   const loggedOutPath = ["/dashboard"]; // Adjust protected routes as needed
//   const loginPath = "/signup"; // Adjust login path as needed

//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   if (!isAuthenticated && loggedOutPath.includes(router.pathname)) {
//     router.push(loginPath);
//     return null;
//   }

//   return (
//     <Layout>
//       <div>
//         {/* <Users />
//         <ParentComponent /> */}
//         <Layout children={undefined} />
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;