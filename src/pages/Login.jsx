import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/left-img.jpg";
import { validateLogin } from "../validations/validationFormsRegex";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // ----- REAL-TIME VALIDATION -----
  useEffect(() => {
    const newErrors = validateLogin(email, password);
    setErrors(newErrors);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateLogin(email, password);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Get stored user data
      const savedUser = JSON.parse(localStorage.getItem("userData"));

      if (!savedUser) {
        alert("No user found. Please signup first.");
        return;
      }

      // Compare entered values with saved data
      if (email === savedUser.email && password === savedUser.password) {
        alert("Login Successful!");
        console.log("Logged in:", savedUser);

        // Redirect or continue
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-[#fae0d6] shadow-xl rounded-2xl w-full max-w-4xl flex">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <img src={img} alt="matrimony" className="rounded-xl" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2 mb-6">
            Login to find your perfect match 💍
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`h-12 w-full mt-5 px-5 rounded-md placeholder:text-gray-600 placeholder:text-lg 
                ${errors.email ? "border-2 border-red-500" : ""}
              `}
              placeholder="Enter the email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`h-12 w-full mt-5 px-5 rounded-md 
                  placeholder:text-gray-600 placeholder:text-lg 
                  ${errors.password ? "border-2 border-red-500" : ""}
                `}
                placeholder="Enter the password"
              />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 mt-10 bg-[#C81E56] text-white rounded-lg font-semibold hover:bg-[#9D174D] transition cursor-pointer"
            >
              Login
            </button>
          </form>

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
