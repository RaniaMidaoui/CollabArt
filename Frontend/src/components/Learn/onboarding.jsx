// Onboarding.js
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";

function Interest(props){
    return (
        <label className="inline-flex items-center m-1">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 peer hidden"
                  value={props.value}
                  onChange={props.onChange}
                />
                <span className="ml-2 select-none cursor-pointer rounded-lg border-2 border-gray-200
   py-2 px-4 font-bold text-gray-500 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">{props.name}</span>
              </label>
    )
}

const Onboarding = () => {
    const [hamActive, setHamActive] = useState(false);

  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState('');
  const [field, setField] = useState('');
  const [smallbiz, setSmallBiz] = useState('');
  const [interests, setInterests] = useState([]);
  const [howLearned, setHowLearned] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleExperienceFieldSubmit = () => {
    // You can send the data to your backend here
    // For simplicity, we'll just log the data for now
    console.log({ experience, field });
    handleNextStep();
  };

  const handleInterestsSubmit = () => {
    // You can send the data to your backend here
    // For simplicity, we'll just log the data for now
    console.log({ interests });
    handleNextStep();
  };

  const handleHowLearnedSubmit = () => {
    // You can send the data to your backend here
    // For simplicity, we'll just log the data for now
    window.location.href = "/home";
    // After submitting the last step, you may want to redirect the user to the main app or dashboard
  };

  return (
    <div className="Courses">
    <Navbar hamActive={hamActive} setHamActive={setHamActive} />
    <NavbarResponsive hamActive={hamActive} />
    <div className="Auth-form-container" style={{ backgroundImage: `url("/back_help.jpg")`}}>
    <div className="">
    <section>
    <div className="">

    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-md shadow-md ">
      <h2 className="text-2xl font-semibold mb-4">User Onboarding</h2>
      {step === 1 && (
        <>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-600">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="field" className="block text-sm font-medium text-gray-600">
              Field
            </label>
            <input
              type="text"
              id="field"
              name="field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="field" className="block text-sm font-medium text-gray-600">
              Small Business Name
            </label>
            <input
              type="text"
              id="smallbiz"
              name="smallbiz"
              value={smallbiz}
              onChange={(e) => setSmallBiz(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="grid w-full place-items-center">
            <span className='m-2'>Eduction Level</span>
            <div className="grid w-[25rem] grid-rows-4 gap-2 rounded-xl bg-gray-100 p-2">
                <div>
                    <input type="radio" name="option" id="1" value="1" className="peer hidden" checked />
                    <label for="1" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#91827d] peer-checked:font-bold peer-checked:text-white">High School</label>
                </div>

                <div>
                    <input type="radio" name="option" id="2" value="2" className="peer hidden" />
                    <label for="2" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#91827d] peer-checked:font-bold peer-checked:text-white">University Undergraduate</label>
                </div>

                <div>
                    <input type="radio" name="option" id="3" value="3" className="peer hidden" />
                    <label for="3" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#91827d] peer-checked:font-bold peer-checked:text-white">University Graduate</label>
                </div>

                <div>
                    <input type="radio" name="option" id="4" value="3" className="peer hidden" />
                    <label for="4" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#91827d] peer-checked:font-bold peer-checked:text-white">Masters or PhD</label>
                </div>
            </div>
        </div>
          <br/>
          <div className="flex justify-between">
            <button onClick={handleExperienceFieldSubmit} className="px-4 py-2 bg-[#91827d] text-white rounded-md">
              Next
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Pick your interest to help us personalize your learning experience with us!</label>
            <br/>
            <div>
            <Interest name="Painting" value="painting" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Sculpting" value="sculpting" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Drawing" value="drawing" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Photography" value="photography" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Pottery" value="pottery" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Woodworking" value="woodworking" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Glassblowing" value="glassblowing" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Digital Art" value="digital_art" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Calligraphy" value="calligraphy" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Ceramics" value="ceramics" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Marketing" value="marketing" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Weaving" value="weaving" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Carpet Making" value="carpetmaking" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Tunisian Cuisine" value="tncuisine" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Italian Cuisine" value="itcuisine" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Oriental Cuisine" value="mecuisine" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Asian Cuisine" value="ascuisine" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Home Decor" value="homedecor" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Leatherwork" value="leatherwork" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Metalwork" value="metalwork" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Malouf" value="Malouf" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Arabic Calligraphy" value="calligraphy" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Basketry" value="basketry" onChange={(e) => setInterests([...interests, e.target.value])}/>
            <Interest name="Dance" value="dance" onChange={(e) => setInterests([...interests, e.target.value])}/>

            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={handlePreviousStep} className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Previous
            </button>
            <button onClick={handleInterestsSubmit} className="px-4 py-2 bg-[#91827d] text-white rounded-md">
              Next
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className="mb-4">
            <label htmlFor="how-learned" className="block text-sm font-medium text-gray-600">
              How did you hear about us?
            </label>
            <input
              type="text"
              id="how-learned"
              name="how-learned"
              value={howLearned}
              onChange={(e) => setHowLearned(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <button onClick={handlePreviousStep} className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Previous
            </button>
            <button onClick={handleHowLearnedSubmit} className="px-4 py-2 bg-[#91827d] text-white rounded-md">
              Finish
            </button>
          </div>
        </>
      )}
    </div>
    </div>
    </section>
    </div>
    </div>
    <Footer />
    </div>

  );
};

export default Onboarding;
