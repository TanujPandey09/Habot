import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const ReadyToDive = () => {
    return (
        <div className="ready-to-dive container mx-auto py-20 px-2">
            <section className="bg-white grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="w-full">
                    <h2 className="text-3xl font-bold mb-4">Ready to dive into HABOT?</h2>
                    <p className="mb-6">
                        Signing up with HABOT opens the door to a world of new opportunities
                        and potential for business growth. Gain access to a vibrant community
                        of like-minded individuals, unlock valuable resources, and take the first
                        step towards realizing your entrepreneurial dreams.
                    </p>
                    <button className="bg-green-800 text-white py-2 px-4 rounded-md flex items-center space-x-2">
                        <span>Sign up Today !</span>
                        <MdOutlineArrowRightAlt />
                    </button>
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
                    {['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'].map(city => (
                        <span key={city} className="border border-orange-300 rounded-md px-2 py-2 text-center flex items-center justify-center font-poppins">
                            {city}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    )
}