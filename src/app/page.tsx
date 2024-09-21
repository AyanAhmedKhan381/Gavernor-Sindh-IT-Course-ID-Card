/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Img1 from "../../public/images/download (1).png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div
          className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center
            justify-center border-4 border-sky-300"
        >
          {/* Background Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300px]">
              <Image
                src={Img1}
                alt={"image"}
                width={400}
                height={300}
                objectFit={"cover"}
                className="opacity-10"
              />
            </div>
          </div>

          {/* Left Section */}

          <div className="w-2/3 pr-4 pt-16 relative z-10">

            {/* GavernorSindh  Logo */}
            <img
              src="/images/governer-sind-logo.png"
              alt="card logo"
              height={50}
              width={50}
              className="absolute top-[-20px] left-0 w-14 h-16 z-10"
            />

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Name:</strong>
              </span>
              <span className="text-black">
                <strong>Ayan Ahmed Khan</strong>
              </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Roll No:</strong>
              </span>
              <span className="text-black">
                <strong>00274376</strong>
              </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Distance learning:</strong>
              </span>
              <span className="text-black">
                <strong>No</strong>
              </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>City:</strong>
              </span>
              <span className="text-black">
                <strong>Karachi</strong>
              </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Center:</strong>
              </span>
              <span className="text-black">
                <strong>Governer House Karachi</strong>
              </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Campus:</strong>
              </span>
              <span className="text-black">
                <strong>Main</strong>
              </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Days/Time:</strong>
              </span>
              <span className="text-black">
                <strong>Sunday-02:00-PM-05:00 PM</strong>
              </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Batch 1:</strong>
              </span>
            </p>

            {/* Button Section */}

            <div className="flex flex-col mt-4 ">
              <button className="relative w-full p-1 rounded-lg border-gray-300 text-white bg-blue-900 items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500"
                  style={{ width: "50%" }}
                ></span>

                <span className="relative z-10">Q2 & WMD</span>
              </button>
            </div>
          </div>

          {/* Right Section */}

          <div className="w-1/3 text-center relative z-10">
            <Image
              src={"/images/1 boy.png"}
              alt={"picture"}
              width={400}
              height={500}
              className="rounded-md mb-6"
            />

            <p className="border-2 border-t-slate-400 pt-1 font-bold text-sky-500 mt-6 text-2xl">
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// /images/1 boy.jpg
