import React, { useState } from 'react'

const VideoPreview = () => {
    const [activeTab, setActiveTab] = useState('buyer')

    const tabContent = {
        buyer: {
            list: [
                "Post your requirements.",
                "Sit back for multiple suppliers to contact you.",
                "Choose among the suppliers based on the ratings and reviews."
            ]
        },
        supplier: {
            list: [
                "Create your profile and showcase your products/services.",
                "Get notified about relevant buyer requirements.",
                "Connect with potential buyers and expand your business."
            ]
        }
    }

    return (
        <div className='p-8' style={{ backgroundColor: "#072F57" }}>
            <section className="bg-navy-blue text-white grid md:grid-cols-2 grid-cols-1 gap-32 md:p-16">
                <div className="h-auto flex items-center justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=i63k5nIZ-UGIZ2Ld"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="tab_content">
                    <div className="flex mb-4 text-2xl md:gap-14 font-bold">
                        <button
                            className={`mr-4 px-4 py-2  ${activeTab === 'buyer' ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`}
                            onClick={() => setActiveTab('buyer')}
                        >
                            Buyer
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'supplier' ? 'border-b-2 border-b-orange-500  text-orange-500' : ''}`}
                            onClick={() => setActiveTab('supplier')}
                        >
                            Supplier
                        </button>
                    </div>

                    <ul className="custom-list">
                        {tabContent[activeTab].list.map((item, index) => (
                            <li key={index} className="custom-list-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default VideoPreview