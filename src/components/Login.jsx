import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import "C:/Users/DELL/Documents/CharityProject/charity/src/Front_assets/LoginPageCSS.css";
const Login = () => {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setError("");
      try {
        const response = await axios.post(
          "http://localhost:4000/login",
          values
        );
        signIn({
          token: response.data.accessToken,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: values.email },
        });
        navigate("/profile");
      } catch (err) {
        if (err.response.status == 404) {
          console.log("RERERE");
          alert("Email does not exist!");

        } else {
          alert("Wrong password check again...");
        }
      }
    },
  });

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    // <div>
    //   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    //     <form onSubmit={formik.handleSubmit}>
    //       <div className="mb-4">
    //         <label
    //           className="block text-grey-darker text-sm font-bold mb-2"
    //           htmlFor="email"
    //         >
    //           Email
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
    // id="email"
    // type="text"
    // value={formik.values.email}
    // onChange={formik.handleChange}
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label
    //           className="block text-grey-darker text-sm font-bold mb-2"
    //           htmlFor="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
    // id="password"
    // type="password"
    // value={formik.values.password}
    // onChange={formik.handleChange}
    //         />
    //       </div>
    //       <div className="text-white bg-red-500">{error}</div>

    //       <div className="flex items-center justify-between">
    //         <button
    //

    //className="bg-blue-700 hover:bg-blue-dark text-white z- font-bold py- px-4 rounded"
    //           type="submit"
    //         >
    //           Sign In
    //         </button>
    //         <a
    //           className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
    //           href="#"
    //         >
    //           Forgot Password?
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <>
      <a href="#" className="Img">
        {" "}
      </a>
      <svg
        width="280"
        height="54"
        viewBox="0 0 280 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.8878 0.758757C37.7797 1.16393 37.0144 7.32161 31.1769 7.32161C25.3393 7.32161 24.569 1.16393 17.4609 0.758757C11.6584 0.428614 6.96634 4.23527 6.24102 4.84553C5.7208 5.28572 5.22558 5.74592 4.76538 6.23614C5.22558 6.11608 5.68578 6.04105 6.13097 6.02605C12.9739 5.77594 18.4663 9.11739 21.3576 12.1237C23.9387 13.8294 26.3448 16.0754 31.1719 16.0754C36.9094 15.8653 40.2708 12.749 43.1571 10.9182C45.4481 9.46254 49.4948 10.7231 50.4802 11.5484C50.8004 11.8136 51.0955 12.1037 51.3706 12.4088C51.5507 12.2137 51.7308 12.0187 51.9059 11.8186C52.131 11.5585 52.3511 11.2933 52.5662 11.0182C54.0518 9.12239 55.2173 6.95645 55.8676 4.64545C54.6421 3.66502 50.2351 0.453624 44.8878 0.758757Z"
          fill="url(#paint0_linear_526_653)"
        />
        <path
          d="M58.6488 14.4346C57.7684 16.1954 56.4278 17.461 55.5774 18.2363C54.9221 18.8366 54.2919 19.4268 53.5766 19.962C53.5766 19.962 53.1314 20.2972 53.0763 20.3372C52.266 20.9275 51.6157 21.3526 50.7403 21.8429C49.0296 22.8083 47.0937 23.3135 45.5781 24.559C44.0824 25.7946 42.6168 27.0351 40.871 27.9355C39.8256 28.4757 34.8034 30.1064 34.7534 29.5212C34.9685 29.4211 35.1836 29.3161 35.4037 29.2161C35.7388 29.061 35.9889 28.9459 36.069 28.9109C36.4041 28.7609 36.9743 28.5007 38.0098 28.0205C35.9889 28.7158 35.1035 29.016 34.7284 29.141H34.7084C34.5933 29.186 34.1381 29.3311 33.5429 29.4662C32.9976 29.5862 32.5174 29.6512 31.9622 29.6362C31.677 29.6312 31.3419 29.4161 31.3219 29.2911C31.2168 28.7008 37.7747 27.0601 37.7647 27.0251C37.7547 26.9801 33.798 28.0005 33.798 28.0005C32.6625 28.2907 30.9667 28.7308 29.8412 29.021L27.4202 29.2611C27.3252 29.2761 27.2301 29.2811 27.1451 29.2761C26.4898 29.2561 26.1446 28.4857 26.7649 28.2757C30.4565 27.3502 34.7884 26.2498 34.7684 26.1497C34.7384 26.0197 27.3902 27.6504 27.075 27.2502C27.015 27.1502 26.89 27.0251 27.2651 26.775C29.171 25.5044 31.3619 25.8646 33.0176 24.1589C33.3028 23.9738 34.9085 22.5232 35.4087 21.9579C35.6138 21.7278 35.8339 21.3226 35.6438 21.0325C35.4687 20.7674 35.1436 20.7724 34.8584 20.8024C34.5583 20.8324 33.3528 21.2726 33.0827 21.4127C32.7975 21.5527 31.8071 22.178 31.547 22.213C31.2869 22.248 30.8767 22.4131 30.7466 22.073C30.6366 21.7828 30.9417 21.5677 31.1168 21.3827C31.2919 21.1976 31.462 20.9925 31.647 20.8174C32.4724 20.0471 33.5078 19.4368 34.6283 18.9466C35.0035 18.7815 35.3887 18.6315 35.7738 18.4964C37.3195 17.9212 38.9352 17.7661 40.5759 17.7211C41.6664 17.6911 42.8119 17.9412 43.8874 17.8761C44.8728 17.8161 45.8632 16.9657 46.6736 16.4405C48.3943 15.315 49.0596 14.9349 51.2706 12.5288C51.2706 12.5288 51.5057 12.2737 51.5607 12.2087C51.6757 12.0836 51.7908 11.9536 51.9058 11.8185C52.1309 11.5584 52.351 11.2933 52.5661 11.0182C54.0518 9.12233 55.2173 6.95639 55.8676 4.64539C55.9676 4.72542 56.0426 4.79045 56.0977 4.83547C56.0977 4.83547 56.0977 4.83547 56.1077 4.84547C58.0885 6.82633 59.6892 12.3587 58.6488 14.4346Z"
          fill="url(#paint1_linear_526_653)"
        />
        <path
          d="M34.1982 52.6963C33.0377 53.1115 32.0122 53.2615 31.0368 53.2615C30.9268 53.2615 30.8167 53.2615 30.7067 53.2565H30.6266C27.8304 53.1065 24.9842 51.7008 21.4026 48.6945C19.2517 46.8888 16.7556 44.4277 13.9894 41.3814C11.8485 39.0253 8.40198 35.0586 4.13512 29.5312C4.09011 29.4762 4.05509 29.4262 4.03008 29.3911C1.06879 25.8246 -0.336819 21.3226 0.0683572 16.7006C0.218422 14.9799 0.613594 13.3142 1.23887 11.7485C2.04922 9.71259 3.23974 7.84678 4.7654 6.23608C5.2256 6.11603 5.6858 6.041 6.13099 6.02599C12.974 5.77588 18.4664 9.11733 21.3576 12.1236C20.6673 11.6684 19.957 11.2483 19.1917 10.9181C17.2658 10.0978 13.9444 10.2128 11.8685 11.5484C10.5829 12.3737 9.8276 13.7694 9.30737 15.16C9.03725 15.8903 8.86218 16.6656 8.79215 17.461C8.72712 18.2163 8.75213 18.9516 8.86718 19.6669C8.85718 19.752 8.85217 19.842 8.84217 19.927C8.58706 23.0234 9.11729 26.4649 10.3228 31.0869C11.4333 35.3587 13.3241 38.8403 16.4505 42.3418C17.2958 43.2872 19.3417 45.8833 22.4331 48.2393C25.4294 50.5253 29.4011 52.5862 34.2032 52.6963H34.1982Z"
          fill="url(#paint2_linear_526_653)"
        />
        <path
          d="M52.8314 33.9681C50.9556 37.4697 49.4549 39.2204 47.204 41.9716C42.787 47.369 39.1405 50.0751 36.4793 51.6158C35.659 52.091 34.9036 52.4462 34.1983 52.6963C29.3962 52.5862 25.4245 50.5303 22.4282 48.2444C19.3419 45.8833 17.291 43.2922 16.4456 42.3418C13.3192 38.8403 11.4334 35.3587 10.3179 31.0869C9.11241 26.4649 8.58218 23.0234 8.83729 19.927C8.8473 19.842 8.8523 19.752 8.8623 19.6669C9.10741 21.1676 9.74769 22.5632 10.7631 23.7837C10.7631 23.7837 20.3723 37.1395 22.5082 39.2755C26.1598 42.927 29.2962 44.0875 32.0024 43.8725C32.0724 43.8725 32.1424 43.8624 32.2125 43.8524C32.2625 43.8474 32.3125 43.8424 32.3625 43.8374C32.4025 43.8324 32.4476 43.8274 32.4876 43.8224C32.5126 43.8224 32.5376 43.8174 32.5626 43.8124C32.6126 43.8074 32.6576 43.7974 32.7077 43.7874C32.7677 43.7774 32.8227 43.7674 32.8827 43.7574C34.1183 43.5173 35.2638 42.9971 36.3242 42.3168C36.4243 42.2517 36.5243 42.1867 36.6244 42.1217C36.7994 42.0016 36.9745 41.8766 37.1496 41.7465C37.1696 41.7315 37.1896 41.7165 37.2096 41.7015C37.2346 41.6815 37.2596 41.6665 37.2797 41.6465C37.3347 41.6065 37.3897 41.5614 37.4447 41.5214C38.125 41.0012 38.7953 40.426 39.3706 39.8007H39.3756C40.0909 39.0854 40.7612 38.3501 41.3814 37.6497C42.0717 37.3596 42.9771 37.4797 43.3473 38.12C43.5274 38.4301 43.5674 38.8303 43.8275 39.0804C44.2427 39.4755 44.918 39.2554 45.4232 38.9903C47.8993 37.6848 50.0102 35.6839 51.4508 33.2828C51.6759 32.9077 51.981 32.4675 52.4162 32.5025C52.6113 32.5175 52.7814 32.6376 52.8914 32.7976C52.9665 32.9077 53.0215 33.0327 53.0415 33.1628C53.0965 33.4879 52.9665 33.683 52.8114 33.9731L52.8314 33.9681Z"
          fill="url(#paint3_linear_526_653)"
        />
        <path
          d="M49.3897 33.2128C49.8372 33.2128 50.2 32.85 50.2 32.4025C50.2 31.9549 49.8372 31.5921 49.3897 31.5921C48.9422 31.5921 48.5793 31.9549 48.5793 32.4025C48.5793 32.85 48.9422 33.2128 49.3897 33.2128Z"
          fill="url(#paint4_linear_526_653)"
        />
        <path
          d="M55.3924 35.964C55.8399 35.964 56.2027 35.6012 56.2027 35.1537C56.2027 34.7061 55.8399 34.3433 55.3924 34.3433C54.9448 34.3433 54.582 34.7061 54.582 35.1537C54.582 35.6012 54.9448 35.964 55.3924 35.964Z"
          fill="url(#paint5_linear_526_653)"
        />
        <path
          d="M52.5161 40.0908C53.1708 40.0908 53.7016 39.56 53.7016 38.9053C53.7016 38.2506 53.1708 37.7198 52.5161 37.7198C51.8613 37.7198 51.3306 38.2506 51.3306 38.9053C51.3306 39.56 51.8613 40.0908 52.5161 40.0908Z"
          fill="url(#paint6_linear_526_653)"
        />
        <path
          d="M46.1384 37.2146C46.7931 37.2146 47.3239 36.6838 47.3239 36.0291C47.3239 35.3743 46.7931 34.8436 46.1384 34.8436C45.4837 34.8436 44.9529 35.3743 44.9529 36.0291C44.9529 36.6838 45.4837 37.2146 46.1384 37.2146Z"
          fill="url(#paint7_linear_526_653)"
        />
        <path
          d="M55.3924 30.3416C56.4615 30.3416 57.3282 29.4749 57.3282 28.4058C57.3282 27.3366 56.4615 26.4699 55.3924 26.4699C54.3232 26.4699 53.4565 27.3366 53.4565 28.4058C53.4565 29.4749 54.3232 30.3416 55.3924 30.3416Z"
          fill="url(#paint8_linear_526_653)"
        />
        <path
          d="M72.8301 24.6541C72.8301 14.4447 77.187 10.9131 83.5647 10.9131C89.9425 10.9131 93.8492 15.115 93.8492 22.3981H89.1572C89.1572 18.6465 87.9917 15.6052 83.5647 15.6052C79.1378 15.6052 77.5221 18.0813 77.5221 24.6491C77.5221 31.217 79.0978 33.698 83.5647 33.698C87.4664 33.698 89.1572 31.4471 91.2231 28.7809L93.9242 32.9477C90.7729 36.9995 87.6565 38.3901 83.5647 38.3901C77.182 38.3901 72.8301 34.8636 72.8301 24.6491V24.6541Z"
          fill="#F7F5F5"
        />
        <path
          d="M95.4648 27.0201V26.9801C95.4648 18.7966 99.0314 15.6452 104.889 15.6452C110.746 15.6452 114.273 18.7966 114.273 27.0201C114.273 35.2437 110.746 38.3551 104.889 38.3551C99.0314 38.3551 95.4648 35.2037 95.4648 27.0201ZM104.889 33.663C108.04 33.663 109.581 32.7226 109.581 26.9801C109.581 21.2376 108.04 20.3372 104.889 20.3372C101.738 20.3372 100.157 21.2376 100.157 26.9801C100.157 32.7226 101.733 33.663 104.889 33.663Z"
          fill="#F7F5F5"
        />
        <path
          d="M116.524 26.9801C116.524 19.0967 120.316 15.6452 125.948 15.6452C131.956 15.6452 135.072 19.847 135.072 23.7137C135.072 27.0552 132.931 29.4962 127.189 29.4962H121.371C121.861 32.6476 123.397 33.663 125.953 33.663C128.129 33.663 129.78 33.1378 132.636 31.7472L135.302 35.799C130.835 37.8999 128.809 38.3501 125.953 38.3501C120.471 38.3501 116.529 34.9736 116.529 27.0151V26.9751L116.524 26.9801ZM130.19 23.4536C130.19 21.3877 128.199 20.3372 125.948 20.3372C123.282 20.3372 121.746 21.3527 121.331 24.8042H128.689C129.89 24.8042 130.19 24.1289 130.19 23.4536Z"
          fill="#F7F5F5"
        />
        <path
          d="M137.543 28.5958V16.2104H142.235V28.5608C142.235 32.0523 143.811 33.1028 146.702 33.1028H151.659V16.2104H156.351V37.7948H146.702C141.935 37.7948 137.543 35.3538 137.543 28.5958Z"
          fill="#F7F5F5"
        />
        <path
          d="M159.353 16.2104L161.794 18.3514C163.37 16.8507 165.696 16.2104 168.512 16.2104H171.928V20.9025H168.512C165.621 20.9025 164.045 21.2426 164.045 25.4445V37.7948H159.353V16.2104Z"
          fill="#F7F5F5"
        />
        <path
          d="M181.502 26.9801C181.502 19.4368 184.954 15.6452 190.476 15.6452C196.484 15.6452 199.185 19.812 199.185 23.5286C199.185 26.68 197.084 29.086 192.467 29.086H185.449C185.899 33.1378 187.74 34.5284 190.481 34.5284C192.657 34.5284 194.348 33.9281 197.199 32.4625L199.375 35.7639C195.098 37.8298 193.333 38.3551 190.476 38.3551C185.184 38.3551 181.502 34.7135 181.502 27.0201V26.9801ZM195.278 23.4136C195.278 20.5623 192.727 19.4719 190.471 19.4719C187.655 19.4719 185.779 20.8625 185.404 25.2544H193.213C194.863 25.2544 195.278 24.279 195.278 23.4136Z"
          fill="#FF0303"
        />
        <path
          d="M209.47 19.4719C207.144 19.4719 205.493 20.2972 205.493 22.3981C205.493 25.9247 218.444 24.389 218.444 31.7822C218.444 35.5338 215.327 38.3501 209.775 38.3501C206.623 38.3501 203.882 37.3346 200.501 35.4988L202.602 32.2324C206.018 33.9582 207.744 34.5234 209.77 34.5234C211.611 34.5234 214.422 34.0332 214.422 31.6722C214.422 27.6954 201.621 30.0214 201.621 22.3981C201.621 18.4564 204.738 15.6402 209.465 15.6402C214.572 15.6402 218.323 18.4564 216.933 24.389H213.106C214.272 20.7474 212.581 19.4719 209.465 19.4719H209.47Z"
          fill="#FF0303"
        />
        <path
          d="M223.055 18.7616C224.596 17.0708 226.807 16.2104 229.663 16.2104C235.556 16.2104 238.637 19.737 238.637 27.0201C238.637 34.3033 235.561 37.7948 229.663 37.7948C227.597 37.7948 225.872 37.3446 224.521 36.4793V44.1726H220.694V16.2104L223.06 18.7616H223.055ZM229.663 33.9632C232.815 33.9632 234.805 32.9127 234.805 27.0201C234.805 21.1276 232.78 20.0371 229.663 20.0371C226.547 20.0371 224.521 21.0876 224.521 26.9801C224.521 32.8727 226.512 33.9632 229.663 33.9632Z"
          fill="#FF0303"
        />
        <path
          d="M240.888 27.0201V26.9801C240.888 18.9867 244.005 15.6452 249.862 15.6452C255.72 15.6452 258.836 18.9867 258.836 26.9801V27.0201C258.836 35.0136 255.72 38.3551 249.862 38.3551C244.005 38.3551 240.888 35.0136 240.888 27.0201ZM249.862 34.5284C253.013 34.5284 255.004 33.553 255.004 27.0201C255.004 20.4873 253.013 19.4769 249.862 19.4769C246.711 19.4769 244.72 20.4523 244.72 26.9851C244.72 33.518 246.711 34.5284 249.862 34.5284Z"
          fill="#FF0303"
        />
        <path
          d="M261.457 9.8277H265.284V13.5793H261.457V9.8277ZM261.457 16.2105H265.284V37.7949H261.457V16.2105Z"
          fill="#FF0303"
        />
        <path
          d="M268.29 16.2104L270.391 18.4614C271.892 16.8857 274.108 16.2104 276.999 16.2104H280V20.0371H276.999C274.108 20.0371 272.122 20.3372 272.122 25.4445V37.7948H268.295V16.2104H268.29Z"
          fill="#FF0303"
        />
        <defs>
          <linearGradient
            id="paint0_linear_526_653"
            x1="22.6331"
            y1="-6.00418"
            x2="48.8295"
            y2="33.0228"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0303" />
            <stop offset="0.1" stopColor="#F60505" />
            <stop offset="0.25" stopColor="#DF0A0C" />
            <stop offset="0.45" stopColor="#BA1417" />
            <stop offset="0.67" stopColor="#852126" />
            <stop offset="0.92" stopColor="#443239" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_526_653"
            x1="59.9894"
            y1="4.28523"
            x2="26.6349"
            y2="35.3437"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBBB" />
            <stop offset="0.04" stopColor="#FAAF95" />
            <stop offset="0.1" stopColor="#FB7E6B" />
            <stop offset="0.16" stopColor="#FC5548" />
            <stop offset="0.21" stopColor="#FD352D" />
            <stop offset="0.27" stopColor="#FE1E19" />
            <stop offset="0.32" stopColor="#FE100E" />
            <stop offset="0.36" stopColor="#FF0C0A" />
            <stop offset="0.49" stopColor="#FD2F28" />
            <stop offset="0.76" stopColor="#FB8975" />
            <stop offset="1" stopColor="#F9DBBB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_526_653"
            x1="17.1008"
            y1="16.7557"
            x2="17.1008"
            y2="-0.0216388"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0303" />
            <stop offset="0.1" stopColor="#F60505" />
            <stop offset="0.25" stopColor="#DF0A0C" />
            <stop offset="0.45" stopColor="#BA1417" />
            <stop offset="0.67" stopColor="#852126" />
            <stop offset="0.92" stopColor="#443239" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_526_653"
            x1="60.6548"
            y1="36.1841"
            x2="-11.4515"
            y2="36.1841"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBBB" />
            <stop offset="0.04" stopColor="#FAAF95" />
            <stop offset="0.1" stopColor="#FB7E6B" />
            <stop offset="0.16" stopColor="#FC5548" />
            <stop offset="0.21" stopColor="#FD352D" />
            <stop offset="0.27" stopColor="#FE1E19" />
            <stop offset="0.32" stopColor="#FE100E" />
            <stop offset="0.36" stopColor="#FF0C0A" />
            <stop offset="0.48" stopColor="#DB1313" />
            <stop offset="0.76" stopColor="#81262A" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_526_653"
            x1="48.7194"
            y1="31.7322"
            x2="50.095"
            y2="33.1078"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBBB" />
            <stop offset="0.04" stopColor="#FAAF95" />
            <stop offset="0.1" stopColor="#FB7E6B" />
            <stop offset="0.16" stopColor="#FC5548" />
            <stop offset="0.21" stopColor="#FD352D" />
            <stop offset="0.27" stopColor="#FE1E19" />
            <stop offset="0.32" stopColor="#FE100E" />
            <stop offset="0.36" stopColor="#FF0C0A" />
            <stop offset="0.48" stopColor="#DB1313" />
            <stop offset="0.76" stopColor="#81262A" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_526_653"
            x1="56.1177"
            y1="35.879"
            x2="54.502"
            y2="34.2633"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBBB" />
            <stop offset="0.04" stopColor="#FAAF95" />
            <stop offset="0.1" stopColor="#FB7E6B" />
            <stop offset="0.16" stopColor="#FC5548" />
            <stop offset="0.21" stopColor="#FD352D" />
            <stop offset="0.27" stopColor="#FE1E19" />
            <stop offset="0.32" stopColor="#FE100E" />
            <stop offset="0.36" stopColor="#FF0C0A" />
            <stop offset="0.48" stopColor="#DB1313" />
            <stop offset="0.76" stopColor="#81262A" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_526_653"
            x1="53.2114"
            y1="40.1108"
            x2="51.7908"
            y2="37.6448"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBBB" />
            <stop offset="0.04" stopColor="#FAAF95" />
            <stop offset="0.1" stopColor="#FB7E6B" />
            <stop offset="0.16" stopColor="#FC5548" />
            <stop offset="0.21" stopColor="#FD352D" />
            <stop offset="0.27" stopColor="#FE1E19" />
            <stop offset="0.32" stopColor="#FE100E" />
            <stop offset="0.36" stopColor="#FF0C0A" />
            <stop offset="0.48" stopColor="#DB1313" />
            <stop offset="0.76" stopColor="#81262A" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_526_653"
            x1="45.158"
            y1="37.0145"
            x2="47.1688"
            y2="35.0036"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBBB" />
            <stop offset="0.04" stopColor="#FAAF95" />
            <stop offset="0.1" stopColor="#FB7E6B" />
            <stop offset="0.16" stopColor="#FC5548" />
            <stop offset="0.21" stopColor="#FD352D" />
            <stop offset="0.27" stopColor="#FE1E19" />
            <stop offset="0.32" stopColor="#FE100E" />
            <stop offset="0.36" stopColor="#FF0C0A" />
            <stop offset="0.48" stopColor="#DB1313" />
            <stop offset="0.76" stopColor="#81262A" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_526_653"
            x1="57.0531"
            y1="26.8601"
            x2="53.6566"
            y2="30.0215"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9DBBB" />
            <stop offset="0.04" stopColor="#FAAF95" />
            <stop offset="0.1" stopColor="#FB7E6B" />
            <stop offset="0.16" stopColor="#FC5548" />
            <stop offset="0.21" stopColor="#FD352D" />
            <stop offset="0.27" stopColor="#FE1E19" />
            <stop offset="0.32" stopColor="#FE100E" />
            <stop offset="0.36" stopColor="#FF0C0A" />
            <stop offset="0.48" stopColor="#DB1313" />
            <stop offset="0.76" stopColor="#81262A" />
            <stop offset="1" stopColor="#2E3840" />
          </linearGradient>
        </defs>
      </svg>
      <div className="Long_Line"></div>
      <span className="Header_span">Vous n'êtes pas un membre?</span>
      <button
        onClick={() => {
          navigate("/register");
        }}
        className="Header_button"
      >
        {" "}
        <span>Rejoignez Nous!</span>{" "}
      </button>
      <div className="container">
        <span className="Big_Title">Se Connecter</span>
        <form onSubmit={formik.handleSubmit}>
          <div className="User_Box">
            <input
              className="input_Email"
              required
              id="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <label className="Email">Email</label>
          </div>
          <div className="User_Box">
            <input
              className="input_Password"
              required
              type={passwordType}
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <label className="Mot_de_passe" type="Hidden">
              Mot de passe
            </label>
          </div>
          <button className="CNXbutton" type="submit">
            {" "}
            Se Connecter{" "}
          </button>
          <div className="Checkbox_Container">
            <input type="checkbox" className="Checkbox" />
            <label className="Souvenir"> Se souvenir de moi</label>
            <div className="Vl"></div>
            <a className="F_Password" href="#">
              Mot de passe oublié?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
