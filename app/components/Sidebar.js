'use client'; // This is a client component
import React, { useState } from 'react';
import ChatIcon from '../Icons/ChatIcon';
import HomeIcon from '../Icons/HomeIcon';
import Logo from '../Icons/Logo';

const Sidebar = ({isOpen, setIsOpen}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? 'w-48' : 'w-16'
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex flex-col items-center justify-start h-full space-y-6 p-6">
        <h2
          className={`text-2xl font-bold mb-4 transition-all duration-300`}
        >
          <Logo/>
        </h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a
             href="/" 
                className={`flex items-center text-white hover:bg-gray-700 p-2 rounded-md transition-colors duration-300 ${
                  isOpen ? 'justify-start' : 'justify-center'
                }`}
              >
               <HomeIcon/>
                <span
                  className={`text-lg transition-all duration-300 ml-3 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={{ width: isOpen ? '100px' : '0' }}
                >
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                 href="/chat" 
                className={`flex items-center text-white hover:bg-gray-700 p-2 rounded-md transition-colors duration-300 ${
                  isOpen ? 'justify-start' : 'justify-center'
                }`}
              >
                <ChatIcon/>
                <span
                  className={`text-lg transition-all duration-300 ml-3 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={{ width: isOpen ? '100px' : '0' }}
                >
                  Chat
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
