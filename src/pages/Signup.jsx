import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/left-img.jpg";
import { validateSignup } from "../validations/validationFormsRegex";

const Signup = () => {
  const [values, setValues] = useState({
    profileFor: "",
    email: "",
    countryCode: "+91",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Real-time validation on every change
  useEffect(() => {
    setErrors(validateSignup(values));
  }, [values]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateSignup(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Signup data:", values);
      // API Call Here

      // localstorage
      localStorage.setItem("userData", JSON.stringify(values));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-[#fae0d6] shadow-xl rounded-2xl w-full max-w-4xl flex">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <img src={img} alt="matrimony" className="rounded-xl" />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-gray-800">Join Us</h1>
          <p className="text-gray-500 mt-2 mb-6">
            Sign up to discover your perfect match 💍
          </p>

          <form onSubmit={handleSubmit}>
            {/* Profile For */}
            <select
              name="profileFor"
              value={values.profileFor}
              onChange={handleChange}
              className={`w-full h-12 px-4 rounded-md outline-none
                ${errors.profileFor ? "border-2 border-red-500" : ""}
              `}
            >
              <option value="">Profile created for</option>
              <option value="self">Self</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="relative">Relative</option>
              <option value="friend">Friend</option>
            </select>
            {errors.profileFor && (
              <p className="text-red-500 text-sm mt-1">{errors.profileFor}</p>
            )}

            {/* Email */}
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`h-12 w-full mt-5 px-5 rounded-md placeholder:text-gray-600
                ${errors.email ? "border-2 border-red-500" : ""}
              `}
              placeholder="Enter the email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            {/* Phone */}
            <div className="flex w-full mt-5 space-x-3">
              <select
                name="countryCode"
                value={values.countryCode}
                onChange={handleChange}
                className="h-12 w-20 rounded-md text-lg px-3 border border-gray-400"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>

              <input
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                className={`h-12 flex-1 rounded-md border px-5 text-lg placeholder:text-gray-600
                  ${
                    errors.phone ? "border-2 border-red-500" : "border-gray-400"
                  }
                `}
                placeholder="Enter the number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}

            {/* Password */}
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={`h-12 w-full mt-5 px-5 rounded-md placeholder:text-gray-600
                ${errors.password ? "border-2 border-red-500" : ""}
              `}
              placeholder="Enter the password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className={`h-12 w-full mt-5 px-5 rounded-md placeholder:text-gray-600
                ${errors.confirmPassword ? "border-2 border-red-500" : ""}
              `}
              placeholder="Re-enter the password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}

            <button className="w-full py-3 mt-5 bg-[#C81E56] text-white rounded-lg font-semibold hover:bg-[#9D174D] transition">
              Signup
            </button>
          </form>

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
