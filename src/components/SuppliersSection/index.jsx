import React from 'react'

export default function SupplierSection() {
    return (
        <section className="bg-primaryBg p-8 sm:p-12 md:p-16">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1">
                    <h2 className="font-bold mb-4 font-poppins text-2xl sm:text-3xl md:text-4xl">
                        Let Suppliers <span className='border-b-2 py-1 border-orange-500'>Find You</span>
                    </h2>
                </div>
                <div className='flex-shrink-0'>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                        Get Verified
                    </button>
                </div>
            </div>
        </section>
    )
}