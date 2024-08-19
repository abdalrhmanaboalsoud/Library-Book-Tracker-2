"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import { useState } from "react";
import Toast from "./Toast.js";

function Base() {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    gener: "",
    auther: "",
    description: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

      setIsToastVisible(true);
      setFormData({
        title: e.target.title.value,
        genre: e.target.gener.value,  // Corrected "gener" to "genre"
        author: e.target.auther.value,  // Corrected "auther" to "author"
        description: e.target.description.value,
      });

  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-24 py-20 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <form className="max-w-md mx-5 w-full" onSubmit={submitHandler}>
                {/* Form Fields */}
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Game of Thrones"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="gener"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gener
                  </label>
                  <input
                    type="text"
                    id="gener"
                    placeholder="Fantasy, Horror, Thriller"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    value={formData.gener}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="auther"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Auther
                  </label>
                  <input
                    type="text"
                    id="auther"
                    placeholder="George Martin"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    value={formData.auther}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    placeholder="The Game of Thrones is an epic high fantasy novel..."
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{
                    background:
                      "-webkit-linear-gradient(to right, #283E51, #4B79A1)",
                    background: "linear-gradient(to right, #283E51, #4B79A1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#283E51";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background =
                      "linear-gradient(to right, #283E51, #4B79A1)";
                  }}
                >
                  Register new book
                </button>
              </form>
              <div className="flex flex-col items-left justify-center ml-40">
                <Image
                  width={800}
                  height={500}
                  src="/assets/books.png"
                  alt="Description of the image"
                  className="object-cover rounded-lg"
                />
                <p className="mt-2 text-left text-sm text-gray-600 dark:text-gray-400">
                  Welcome to our book lover's haven! Explore a diverse
                  collection of books across genres, from gripping mysteries to
                  heartwarming romances, insightful non-fiction to enchanting
                  children's tales. Our store is more than a shop—it's a
                  community where stories come to life. Whether you're a
                  lifelong reader or just beginning, there's something here for
                  everyone. Celebrate the magic of reading with us and discover
                  new worlds, one page at a time.{" "}
                  <button
                    type="button"
                    className="text-white font-medium rounded-lg text-sm px-5 py-1 ml-2 me-2 mb-2 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                    style={{
                      background:
                        "-webkit-linear-gradient(to right, #283E51, #4B79A1)",
                      background: "linear-gradient(to right, #283E51, #4B79A1)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#283E51";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background =
                        "linear-gradient(to right, #283E51, #4B79A1)";
                    }}
                  >
                    Get started
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </main>
      {isToastVisible && <Toast message={formData} />}
    </>
  );
}

export default Base;
