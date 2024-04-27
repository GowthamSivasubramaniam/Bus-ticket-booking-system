// import './style.css';
// import React, { useEffect } from 'react';
// import {Link} from 'react-router-dom'

// function Navbar() {

//   useEffect(() => {
//     // Your JavaScript code here
//     const signUpButton = document.getElementById('signUp');
//     const signInButton = document.getElementById('signIn');
//     const container = document.querySelector('.container');

//     signUpButton.addEventListener('click', () => {
//       container.classList.add('right-panel-active');
//     });

//     signInButton.addEventListener('click', () => {
//       container.classList.remove('right-panel-active');
//     });

//     // Clean up event listeners when the component unmounts
//     return () => {

//       signUpButton.removeEventListener('click', () => {
//         container.classList.add('right-panel-active');
//       });
//       signInButton.removeEventListener('click', () => {
//         container.classList.remove('right-panel-active');
//       });
//     };
//   }, []);
//   return (
//     <>

// <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//   <link
//     rel="stylesheet"
//     href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//     integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
//     crossOrigin="anonymous"
//   />
//   <link rel="stylesheet" href="style.css" />
//   <title>Welcome</title>
//   <div className="container" id="container">
//     <div className="form-container sign-up-container">
//       <form action="#m_">
//         <h1>Create Account</h1>
//         <div className="social-container">
//           <a href="#" className="social">
//             <i className="fab fa-facebook-f"/>
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-google-plus-g" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-linkedin-in" />
//           </a>
//         </div>
//         <span>or use your email for registration</span>
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <button>Sign Up</button>
//       </form>
//     </div>
//     <div className="form-container sign-in-container">
//       <form action="#m_">
//         <h1>Sign in</h1>
//         <div className="social-container">
//           <a href="#" className="social">
//             <i className="fab fa-facebook-f" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-google-plus-g" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-linkedin-in" />
//           </a>
//         </div>
//         <span>or use your account</span>
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <a href="#m_">Forgot your password?</a>
//         <button>Login</button>
//       </form>
//     </div>
//     <div className="overlay-container">
//       <div className="overlay">
//         <div className="overlay-panel overlay-left">
//           <h1>Hello friend!</h1>
//           <p>Login to your account</p>
//           <button className="ghost" id="signIn">
//             Login
//           </button>
//         </div>
//         <div className="overlay-panel overlay-right">
//           <h1>Welcome Back!</h1>
//           <h5>
//             Dont have an account? <br /> Join us now
//           </h5>
//           <button className="ghost" id="signUp">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </>

//   );
// }

// export default Navbar;