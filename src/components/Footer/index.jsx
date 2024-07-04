import React from 'react'
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const footerSections = [
    {
        title: "Company",
        links: [
            { name: "About", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Terms",
        links: [
            { name: "Data privacy", url: "#" },
            { name: "Terms", url: "#" },
            { name: "Accessibility", url: "#" }
        ]
    },
    {
        title: "Related",
        links: [
            { name: "Find Buyer", url: "#" },
            { name: "Feedback", url: "#" }
        ]
    }
];

const socialIcons = [
    { Icon: FaLinkedinIn, url: "#" },
    { Icon: FaTwitter, url: "#" },
    { Icon: FaFacebookF, url: "#" },
    { Icon: FaInstagram, url: "#" }
];

const Footer = () => {
    return (
        <footer className="bg-[#051d40] text-white p-7">
            <div className="container mx-auto px-20">
                <div className="border-t border-b border-gray-700">
                    <div className="flex flex-wrap justify-between py-8 px-4 md:px-8">
                        <div className="w-full md:w-auto mb-6 md:mb-0">
                            <img src="/asset/footer-logo.svg" alt="HABOT" className="h-8 mb-2" />
                            <p className="text-sm">© R Singhania</p>
                        </div>
                        {footerSections.map((section, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-auto mb-6 md:mb-0">
                                <h3 className="text-sm font-semibold mb-3">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.url} className="text-sm hover:text-gray-300">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="w-full md:w-auto flex space-x-4 items-start">
                        {socialIcons.map(({ Icon, url }, index) => (
                            <a key={index} href={url} className="text-white cursor-pointer hover:cursor-pointer border border-white rounded-full p-2 transition-colors duration-300 hover:bg-white hover:text-blue-900">
                                <Icon size={16} />
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer