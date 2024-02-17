import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col items-center justify-center">
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          className="py-1 px-2 mb-3 border border-solid border-gray-500 rounded"
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="py-1 px-2 mb-5 border border-solid border-gray-500 rounded"
        />
        <button
          type="submit"
          className="px-2 py-1 mb-5 bg-purple-800 text-white rounded"
        >
          Login
        </button>
      </form>

      <a className="text-purple-800 underline underline-offset-4" href="#">
        Reset password
      </a>
    </div>
  );
};

export default LoginPage;
