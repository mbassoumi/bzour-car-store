import React, {useState} from 'react';

import {faBars, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const logo = require('./../../logo.png');


interface NavbarProps {
    showFilter: boolean
}


const Navbar = ({showFilter}: NavbarProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsFilterOpen(false);
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
        setIsMenuOpen(false);
    };

    const closeSideBar = () => {
        setIsMenuOpen(false);
        setIsFilterOpen(false);
    };

    return (
        <>
            <header className="relative bg-gray-800 flex">
                <div className="flex items-center justify-between w-full">
                    <div className="flex justify-start w-1/3 sm:hidden">
                        {
                            showFilter && (
                                <button className="px-2" onClick={toggleFilter}>
                                    <FontAwesomeIcon size="lg" icon={isFilterOpen ? faTimes : faSearch}
                                                     className="text-gray-400 hover:text-white"/>
                                </button>
                            )
                        }
                    </div>
                    <div className="flex justify-center w-1/3 sm:justify-start">
                        <img src={logo} alt="logo" className="h-16 w-32"/>
                    </div>
                    <div className="flex justify-end w-1/3 sm:w-full">
                        <button className="px-2 sm:hidden" onClick={toggleMenu}>
                            <FontAwesomeIcon size="lg" icon={isMenuOpen ? faTimes : faBars}
                                             className="text-gray-400 hover:text-white"/>
                        </button>
                        <div className="hidden sm:flex  w-full justify-end mx-4 items-center">
                            <a href="#"
                               className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:underline">Home</a>
                            <a href="#"
                               className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:underline">All
                                Cars</a>
                            <a href="#"
                               className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:underline">Calculate
                                Payments</a>
                            <a href="#"
                               className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:underline">About</a>
                        </div>
                    </div>
                </div>

            </header>

            {
                isMenuOpen && (
                    <div className="fixed z-10 bg-red-500 w-2/3 h-screen right-0">

                    </div>
                )
            }

            {
                isFilterOpen && (
                    <div className="fixed z-10 bg-green-500 w-2/3 h-screen left-0">

                    </div>
                )
            }
            {
                (isMenuOpen || isFilterOpen) &&
                (
                    <button className="fixed w-full h-full  bg-black opacity-25 cursor-default" onClick={closeSideBar}>

                    </button>
                )
            }

        </>
    );
};

export default Navbar;