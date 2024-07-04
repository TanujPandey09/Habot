import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiceTagsOpen, setIsServiceTagsOpen] = useState(false)

  return (
    <div className="container mx-auto py-1 md:px-0">
      <header className="bg-white p-4">
        <div className="flex justify-between items-center text-headerMenuColor">
          <img src="/asset/logo.svg" alt="HABOT" className="h-8" />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center absolute md:static bg-white left-0 right-0 top-16 md:top-auto mr-3 p-4 md:p-0`}>
            <a href="#" className="block md:inline-block md:mr-4 mb-2 md:mb-0">Find Suppliers</a>
            <div className="relative md:mr-10">
              <button
                className="flex items-center mb-2 md:mb-0"
                onClick={() => setIsServiceTagsOpen(!isServiceTagsOpen)}
              >
                Find Service Tags
                <span className="ml-1">{isServiceTagsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>

              </button>
              {isServiceTagsOpen && (
                <div className="absolute bg-white shadow-md mt-1 py-2 px-4 rounded">
                  {/* Add dropdown items here */}
                  <a href="#" className="block py-1">Option 1</a>
                  <a href="#" className="block py-1">Option 2</a>
                </div>
              )}
            </div>
            <button className="border font-inter text-sm border-menuColor font-bold text-buttonPrimaryColor px-12 py-2 rounded mt-2 md:mt-0 md:ml-4 hover:bg-buttonPrimaryColor hover:text-white transition duration-300 ease-in-out">
              Login / Sign Up
            </button>
          </nav>
        </div>
      </header>
    </div>
  )
}