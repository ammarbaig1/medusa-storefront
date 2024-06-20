import React from "react";
import axios from "axios";
// import { fetcher } from "../../../lib/api";

const Header = () => {
  return (
    <div>
      <ul></ul>
      <div className="bg-blue-500 text-white px-10 mb-10">
        <ul className="flex space-x-8 py-6">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
