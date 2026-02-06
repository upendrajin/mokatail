import React from "react";

const WhatsAppButton = () => {
    const phoneNumber = "918469464739"; 
    const message = "Hello, I want more information about your franchise.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappLink}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
                height="30"
                fill="white"
            >
                <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.6.8 5.1 2.2 7.2L3 29l6-2.1c2 1.1 4.3 1.7 7 1.7 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.5c-2.4 0-4.6-.6-6.5-1.8l-.5-.3-3.6 1.3 1.2-3.5-.3-.5c-1.3-2-2-4.4-2-6.7 0-6.4 5.2-11.6 11.6-11.6S27.6 9.5 27.6 16 22.4 26.4 16 26.4zm6.4-8.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5.7.3 1.2.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
            </svg>

        </a>
    );
};

export default WhatsAppButton;
