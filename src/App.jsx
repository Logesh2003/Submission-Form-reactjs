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
      <div className='container mx-auto w-[450px] h-screen content-center'>
        <div className="bg-white shadow-lg p-5 rounded-xl">
          <h1 className='flex justify-center header mb-5 font-bold text-xl'>Candidate Registration</h1>
          <form className='flex flex-col'>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label htmlFor="fname">First name <span className='text-red-500'>*</span></label>
                <input type="text" name="firstName" placeholder="Enter First Name" autoFocus
                  className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px]' />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lname">Last name <span className='text-red-500'>*</span></label>
                <input type="text" name="lastName" placeholder="Enter Last Name"
                  className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px]' />
              </div>
            </div>
            <label htmlFor="email">Enter Email <span className='text-red-500'>*</span>
            </label>
            <input type="email" name="email" placeholder="Enter Email"
              className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px]' />
            <label htmlFor="contact">Contact <span className='text-red-500'>*</span>
            </label>
            <input type="number" name="contact" placeholder="Enter Mobile Number"
              className='placeholder:text-gray-500 placeholder:text-[13px] flex content-center h-[30px]' />
            <div className="space-y-4">
              {/* Gender Section */}
              <div>
                <label className="font-medium">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-row items-center gap-5 mt-2 mx-5">
                  <label className="flex items-center gap-1">
                    <input type="radio" id="male" name="gender" value="male" />
                    Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" id="female" name="gender" value="female" />
                    Female
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" id="other" name="gender" value="other" />
                    Other
                  </label>
                </div>
              </div>

              {/* Best Subject Section */}
              <div>
                <label className="font-medium">Your best subject</label>
                <div className="flex flex-row items-center gap-5 mt-2 mx-5">
                  <label className="flex items-center gap-1">
                    <input type="checkbox" id="math" name="subject" value="math" />
                    Math
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="checkbox" id="science" name="subject" value="science" />
                    Science
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="checkbox" id="subject-other" name="subject" value="other" />
                    Other
                  </label>
                </div>
              </div>
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
            <div className="flex justify-center gap-5">
              <button
                type="reset"
                className="border border-gray-400 text-gray-700 px-4 py-2 rounded-sm text-sm hover:bg-gray-100 transition"
              >
                Reset
              </button>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-sm text-sm hover:bg-green-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
