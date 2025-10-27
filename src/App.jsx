import { useState } from 'react'
import './App.css'

function App() {
  const [fileName, setFileName] = useState("No file selected.");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file selected.");
    }
  };
  return (
    <>
      <div className='container mx-auto w-[400px] mt-20'>
        <div className="bg-white p-5 rounded-lg">
          <h1 className='flex justify-center header'>Form in React</h1>
          <form className='flex flex-col'>
            <label htmlFor="fname">First name *</label>
            <input type="text" name="firstName" placeholder="Enter First Name"
              className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px] placeholder:px-3' />
            <label htmlFor="lname">Last name *</label>
            <input type="text" name="lastName" placeholder="Enter Last Name"
              className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px] placeholder:px-3' />
            <label htmlFor="email">Enter Email *</label>
            <input type="email" name="email" placeholder="Enter Email"
              className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px] placeholder:px-3' />
            <label htmlFor="contact">Contact *</label>
            <input type="number" name="contact" placeholder="Enter Mobile Number"
              className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px] placeholder:px-3' />
            <label>Gender *</label>
            <div className='flex flex-row content-center h-7 gap-3 mx-20'>
              <input type="radio" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" value="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" value="other" />
              <label htmlFor="other">Other</label>
            </div>
            <label>Your best subject</label>
            <div className='flex flex-row content-center h-7 gap-3 mx-20'>
              <input type="checkbox" name="subject" value="math" />
              <label htmlFor="math">Math</label>
              <input type="checkbox" name="subject" value="science" />
              <label htmlFor="science">Science</label>
              <input type="checkbox" name="subject" value="other" />
              <label htmlFor="other">Other</label>
            </div>
            <label>Upload resume</label>
            <div className="flex items-center border w-full overflow-hidden">
              <label className="relative cursor-pointer bg-gray-100 px-3 py-[6px] text-sm border-r border-gray-300">
                Browse…
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </label>
              <span className="text-sm px-2 truncate">
                {fileName}
              </span>
            </div>
            <label>Select your choice</label>
            <div className="border w-full ">
              <select
                className="w-full px-3 py-[6px] text-sm  bg-gray-200 focus:outline-none"
                defaultValue=""
              >
                <option value="option1" disabled>
                  Choose an option…
                </option>
                <option value="option1">React</option>
                <option value="option2">Java</option>
                <option value="option3">Python</option>
              </select>
            </div>
            <div className="w-full">
              <label className="">About</label>
              <textarea
                placeholder="About your self..."
                rows="4"
                className="w-full border resize-none"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Submit Or Reset</label>

              <div className="flex gap-3">
                <button
                  type="reset"
                  className="border border-gray-400 text-gray-700 px-4 py-2 rounded-sm text-sm hover:bg-gray-100 transition"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
