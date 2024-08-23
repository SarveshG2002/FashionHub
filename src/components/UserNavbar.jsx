import React from 'react';

function Navbar() {
    return (
        <div className="w-full p-4 bg-gray-800">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white font-bold text-xl">
                    <img src="logo.png" alt="Logo" className="h-10" />
                </div>

                {/* Other Navbar Items (e.g., Links) */}
                <div className="flex space-x-4">
                    <a href="/" className="text-white hover:text-gray-400">Home</a>
                    <a href="/about" className="text-white hover:text-gray-400">About</a>
                    <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
