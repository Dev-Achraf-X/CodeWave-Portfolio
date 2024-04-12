import React from "react";
import Typewriter from "../libs/Typewriter";

function ContactPage() {
  return (
    <div>
      <Typewriter
        isTyping={false}
        link={"/about"}
        linkTitle={"LEARN MORE"}
        title={"Contact Me."}
      />
      <div className="w-full h-[75vh] relative half-bg3 items-center grid md:grid-cols-2">
        <form className=" mx-auto">
          <div className="grid grid-cols-2 gap-3">
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="first name"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="last name"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-lg  font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              type="password"
              id="password"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Message
          </button>
        </form>
        <div className="px-6" >
          <h1 className="md:text-5xl text-3xl font-semibold text-primary-500">My Contact Info</h1>
          <div className="mt-10">
            <span className="text-xl font-medium">Adress: </span>
            <span className="text-lg font-light text-gray-700">34 Street Name, City Name Here, United States</span>
          </div>
          <div className="mt-5">
            <span className="text-xl font-medium">Phone: </span>
            <span className="text-lg font-light text-gray-700">+1 242 4942 290</span>
          </div>
          <div className="mt-5">
            <span className="text-xl font-medium">Email: </span>
            <span className="text-lg font-light text-gray-700">info@yourdomain.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
