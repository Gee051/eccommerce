import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 m-9
     ">
      <div className="max-w-md px-6 py-8 bg-gradient-to-r from-purple-500 to-magenta shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Create an Account</h2>
        <form>
            <div>
              <label className="block mb-2 text-lg" htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block mb-2 text-lg" htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="w-full px-3 py-2 border rounded-md" required />
            </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4 text-lg">
            <input type="checkbox" id="agree" className="mr-2 text-2xl" required />
            <label htmlFor="agree">I accept the terms and conditions</label>
          </div>
          <button type="submit" className="w-full py-3 bg-purple-700 text-white rounded-md hover:bg-magenta transition-colors duration-300 ease-in-out">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;


// "use client"
// import React, { useState } from 'react'
// import Link from 'next/link'
// import { Blur } from 'react-blur'


// const SignUpPage = () => {
//   const [isSignup, setIsSignup] = useState(true);

//   const handleToggle = () => {
//     setIsSignup((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen">
//       <Blur img="/assets/backlogg.avif" blurRadius={8} enableStyles>
//         <div className="flex flex-col items-center justify-center min-h-screen text-black">
//           <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-10">
//             <div className="flex justify-between items-center mb-8">
//               <img src="/assets/logo.png" alt="Logo" className="h-12" />
//               <div className="border-b-4 border-magenta w-20"></div>
//             </div>

//             {isSignup ? (
//               <form>
//                 <div className="mb-6">
//                   <label className="text-sm font-medium text-gray-600 block">First Name</label>
//                   <input
//                     type="text"
//                     className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-magenta"
//                     placeholder="First Name"
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label className="text-sm font-medium text-gray-600 block">Last Name</label>
//                   <input
//                     type="text"
//                     className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-magenta"
//                     placeholder="Last Name"
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label className="text-sm font-medium text-gray-600 block">Email</label>
//                   <input
//                     type="email"
//                     className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-magenta"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label className="text-sm font-medium text-gray-600 block">Password</label>
//                   <input
//                     type="password"
//                     className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-magenta"
//                     placeholder="Password (minimum 6 characters)"
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label className="text-sm font-medium text-gray-600 block">Confirm Password</label>
//                   <input
//                     type="password"
//                     className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-magenta"
//                     placeholder="Confirm Password"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between mt-6">
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" className="h-4 w-4 text-magenta focus:ring-magenta" />
//                     <label className="text-sm text-gray-600">Remember me</label>
//                   </div>
//                   <Link href="/">
//                     <a className="text-sm text-magenta hover:text-opacity-90">Forgot Password?</a>
//                   </Link>
//                 </div>
//                 <div className="mt-6">
//                   <input type="checkbox" className="h-4 w-4 text-magenta focus:ring-magenta" />
//                   <label className="text-sm text-gray-600">
//                     Please accept all terms and conditions
//                   </label>
//                 </div>
//                 <div className="flex items-center space-x-4 mt-6">
//                   <button
//                     type="submit"
//                     className="bg-magenta text-white rounded-md px-4 py-2 hover:bg-opacity-90 transition"
//                   >
//                     Sign Up
//                   </button>
//                   <button
//                     type="button"
//                     className="border rounded-md px-4 py-2 text-magenta hover:bg-magenta hover:text-white transition"
//                     onClick={handleToggle}
//                   >
//                     Sign Up with Google
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <form>
//                 <div className="mb-6">
//                   <label className="text-sm font-medium text-gray-600 block">Email</label>
//                   <input
//                     type="email"
//                     className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-magenta"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label className="text-sm font-medium text-gray-600 block">Password</label>
//                   <input
//                     type="password"
//                     className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-magenta"
//                     placeholder="Password"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between mt-6">
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" className="h-4 w-4 text-magenta focus:ring-magenta" />
//                     <label className="text-sm text-gray-600">Remember me</label>
//                   </div>
//                   <Link href="/"className="text-sm text-magenta hover:text-opacity-90">Forgot Password?
//                   </Link>
//                 </div>
//                 <div className="flex items-center space-x-4 mt-6">
//                   <button
//                     type="submit"
//                     className="bg-magenta text-white rounded-md px-4 py-2 hover:bg-opacity-90 transition"
//                   >
//                     Log In
//                   </button>
//                   <div className="text-gray-600">
//                     Don't have an account?{' '}
//                     <Link href="/Signup"className="text-magenta hover:text-opacity-90">Sign Up
//                     </Link>
//                   </div>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </Blur>
//     </div>
//   );
// };

// export default SignUpPage;
