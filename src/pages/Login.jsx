// import "./App.css";
import img from "../assets/left-img.jpg";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="bg-[#fae0d6] shadow-xl rounded-2xl w-full max-w-4xl flex">
          {/* Left Image */}
          <div className="hidden md:flex w-1/2 items-center justify-center p-6">
            <img src={img} alt="matrimony" className="rounded-xl" />
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-500 mt-2 mb-6">
              Login to find your perfect match 💍
            </p>
            <select
              className="
                w-90
                h-12
                px-4
                rounded-md
                border border-gray-300
                outline-none
                text-gray-800
                placeholder:text-gray-500"
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
              name=""
              id=""
              className="h-12 w-90
              mt-5
                  placeholder:text-black
                  placeholder:text-lg
                  rounded-md px-5"
              placeholder="Enter the name"
            />
            <div className="flex justify-between w-90">
              <select
                className="h-12 w-20 rounded-md
                mt-5
                      text-black text-lg px-3"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="text"
                name=""
                id=""
                className="h-12 w-60 mt-5
                  placeholder:text-black
                  placeholder:text-lg px-5
                  rounded-md"
                placeholder="Enter the number"
              />
            </div>

            <button className="w-full py-3 mt-5 bg-[#C81E56] text-white rounded-lg font-semibold hover:bg-[#9D174D] transition">
              Login
            </button>

            <p className="mt-4 text-center text-gray-600">
              Don’t have an account?
              <span className="text-[#C81E56] font-medium cursor-pointer">
                {" "}
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
