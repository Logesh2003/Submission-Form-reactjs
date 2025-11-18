import { Link } from "react-router-dom";
import img from "../assets/left-img.jpg";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-[#fae0d6] shadow-xl rounded-2xl w-full max-w-4xl flex">
        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center p-6">
          <img src={img} alt="matrimony" className="rounded-xl" />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-gray-800">Join Us</h1>
          <p className="text-gray-500 mt-2 mb-6">
            Sign up to discover your perfect match 💍
          </p>

          <select
            className="
              w-full
              h-12
              px-4
              rounded-md
              text-gray-600
              outline-none
            "
          >
            <option value="" disabled selected>
              Profile created for
            </option>
            <option value="self">Self</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="relative">Relative</option>
            <option value="friend">Friend</option>
          </select>

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

          <div className="flex w-full mt-5 space-x-3">
            <select
              className="
              h-12
              w-20
              rounded-md
              text-gray-600
              text-lg
              px-3
              border border-gray-400
            "
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>

            <input
              type="text"
              className="
                h-12
                flex-1
                min-w-0    /* ADD THIS */
                rounded-md
                border border-gray-400
                px-5
                text-lg
                placeholder:text-gray-600
              "
              placeholder="Enter the number"
            />
          </div>

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
            placeholder="Renter the password"
          />

          <button className="w-full py-3 mt-5 bg-[#C81E56] text-white rounded-lg font-semibold hover:bg-[#9D174D] transition">
            Login
          </button>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?
            <Link
              to="/"
              className="text-[#C81E56] font-medium cursor-pointer ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
