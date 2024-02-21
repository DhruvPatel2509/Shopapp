import React from "react";

function NotFound() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-700">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 mt-4 block">
          Go to Home Page
        </a>
      </div>
    </div>
  );
}

export default NotFound;
