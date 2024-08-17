import React from "react";
import { footerData } from "../../utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black  w-full text-white p-8">
      <div className="flex  flex-col  md:flex-row justify-between">
        <div className="grid md:w-5/6 grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:w-1/6 text-gray-400 flex flex-col justify-end items-center md:items-end">
          <div className="text-center md:text-right">
            © Copyright 2022 Abstract Studio Design, Inc. <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
