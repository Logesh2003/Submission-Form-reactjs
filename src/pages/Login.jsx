import { Link } from "react-router-dom";
import img from "../assets/left-img.jpg";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-[#fae0d6] shadow-xl rounded-2xl w-full max-w-4xl flex">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <img src={img} alt="matrimony" className="rounded-xl" />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2 mb-6">
            Login to find your perfect match 💍
          </p>

          <input
            type="text"
            className="
              h-12
              w-full
              mt-5
              px-5
              rounded-md
              placeholder:text-gray-600
              placeholder:text-lg
            "
            placeholder="Enter the email"
          />

          <input
            type="text"
            className="
              h-12
              w-full
              mt-5
              px-5
              rounded-md
              placeholder:text-gray-600
              placeholder:text-lg
            "
            placeholder="Enter the password"
          />

          <button className="w-full py-3 mt-10 bg-[#C81E56] text-white rounded-lg font-semibold hover:bg-[#9D174D] transition">
            Login
          </button>

          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?
            <Link
              to="/signup"
              className="text-[#C81E56] font-medium cursor-pointer"
            >
              {" "}
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
