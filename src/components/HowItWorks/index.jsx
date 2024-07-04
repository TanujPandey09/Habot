import React from 'react'
import UserPlus from '/asset/HowIt/AddPerson.svg'
import ClipboardList from '/asset/HowIt/Checked.svg'
import Search from '/asset/HowIt/Search.svg'
import UserCheck from '/asset/HowIt/Edit.svg'
import Comments from '/asset/HowIt/Quote-Request.svg'
import Handshake from '/asset/HowIt/Connect.svg'

const steps = [
    { title: "Select Your Role and Sign Up", icon: UserPlus, bgColor: "#E8FBFF" },
    { title: "Buyers Post Your Requirements", icon: ClipboardList, bgColor: "#FFF" },
    { title: "Review, Select, and Contact the Best Suppliers", icon: Search, bgColor: "#E8FBFF" },
    { title: "Suppliers Complete your Profile and get notified for opportunities", icon: UserCheck, bgColor: "#FFF" },
    { title: "Contact to Buyers and Share your Quote for the service", icon: Comments, bgColor: "#E8FBFF" },
    { title: "Both the Parties can Connect and Make Business Leave a Feedback", icon: Handshake, bgColor: "#FFF" }
]

export const HowItWorks = () => {
    return (
        <div className="container mx-auto  py-12">
            <h2 className="text-3xl mb-4 text-center font-bold">How it works?</h2>
            <p className="text-center mb-8 text-lg max-w-3xl mx-auto">
                Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
                potential buyers, and build successful business relationships, sharing valuable feedback.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 md:px-20 md:py-10">
                {steps.map((step, index) => (
                    <div key={index} className="py-14 px-12 rounded-md flex flex-col items-center" style={{ backgroundColor: step.bgColor }}>
                        <img src={step.icon} alt={step.title} className="w-12 h-20 mb-2" />
                        <p className="text-center text-xl  font-normal">{step.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}