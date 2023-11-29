import React from "react";

const ApplyJob = () => {
  return (
    <div className="ApplyJob">
      <div className="flex bg-orange-600 py-16">
        <div className="w-1/2 ml-10">
          <img
            className="max-w-xl rounded-2xl"
            src="https://jobs.lgresources.com/hubfs/files_2023/img%20mask.jpg"
            alt="lgresources"
          />
        </div>

        <div className="w-1/2">
          <div className="w-60">
            <img
              className="max-w-lg"
              src="https://jobs.lgresources.com/hubfs/files_2023/icon_cta_1.svg"
              alt="lgresources" />
          </div>

          <h1 className="font-family text-white font-extrabold text-4xl py-14"> APPLY TO ONE OF OUR JOB POSTINGS TODAY </h1>

          <button className="font-family font-semibold bg-white py-4 px-5 rounded-xl text-black hover:bg-orange-600 hover:border border-black transition duration-500 shadow-black shadow-sm"> Apply Now </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
