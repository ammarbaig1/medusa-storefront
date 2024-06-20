import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-500 text-white flex justify-between px-10 py-20 mt-10">
      <div className="w-1/3">
        <div>Medusa Store Front</div>
        <div className="mt-6">
          Medusa is an open-source headless commerce engine that enables
          developers to create amazing digital commerce experiences.
        </div>
      </div>
      <div>
        <ul className="space-y-4">
          <li>List One</li>
          <li>List Two</li>
          <li>List Three</li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
