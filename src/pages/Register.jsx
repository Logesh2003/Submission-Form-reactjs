import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const steps = ["Basic", "Physical", "Education", "Family", "Lifestyle"];
  const titles = [
    "Basic Personal Details",
    "Physical & Appearance Details",
    "Education & Professional Details",
    "Family Details",
    "Lifestyle & Habits",
  ];
  return (
    <>
      <div className="grid grid-cols-6 bg-[#fae0d6]">
        <div className="col-span-6 col-start-1 p-5 bg-white"></div>
        <div className="col-span-6 col-start-1 p-5 text-3xl font-bold bg-white">
          1. Education & Professional Details
        </div>
        <div className="col-span-6 col-start-1 p-5 bg-white"></div>
        <div className="col-span-2 col-start-1 flex flex-col items-center justify-center space-y-6 py-6">
          {steps.map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="
                h-10 w-10 
                rounded-full 
                flex items-center justify-center 
                text-white font-semibold 
                bg-[#C51657]
              "
              >
                {index + 1}
              </div>

              <p className="text-gray-700 mt-2 text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="col-span-4 col-start-3 flex justify-center"></div>
      </div>
    </>
  );
};

export default Register;
