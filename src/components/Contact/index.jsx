import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-5xl pt-[6rem] mx-auto px-4 rounded-2xl">
      {/* Contact Options Section */}
      <div className="p-8 bg-white text-black-500 rounded-lg mt-10 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-start">
          {/* Call Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-black-500">
              Contact our award-winning support team
            </p>
            <a
              href="tel:04067607600"
              className="text-black-500 hover:underline block mt-2 font-medium"
            >
              040-67607600
            </a>
            <p className="text-black-500 mt-1">Everyday 9:00 am - 7:00 pm</p>
          </div>

          {/* Chat Now Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Chat Now</h3>
            <p className="text-black-500">
              Get quick help on product issues, accounts, and more.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mt-3">
              <button className="bg-black-500 hover:bg-gray-700 text-white p-2 px-4 rounded transition shadow-md hover:shadow-xl transform hover:scale-105">
                Start Chatting
              </button>
              <button className="bg-black-500 text-white hover:bg-gray-700 hover:text-white p-2 px-4 rounded transition shadow-md hover:shadow-xl transform hover:scale-105">
                WhatsApp
              </button>
            </div>
            <p className="text-sm text-black-500 mt-3">Hours: 24x7 Chat</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className=" margin-left: 12rem ml-40 w-3/5 p-10 mt-20 mb-15 bg-gray-100 text-black-500 rounded-3xl shadow-2xl transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-center mb-4">
            Submit Your Query
          </h2>
          <p className="text-center mb-6 text-black-500">
            We’re here to help! Reach out with any questions.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black text-white placeholder-black-500 border border-gray-700 outline-none focus:border-white focus:ring-2 focus:ring-white transition duration-200 shadow-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black text-white placeholder-black-500 border border-gray-700 outline-none focus:border-white focus:ring-2 focus:ring-white transition duration-200 shadow-sm"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black text-white placeholder-black-500 border border-gray-700 outline-none focus:border-white focus:ring-2 focus:ring-white transition duration-200 shadow-sm"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black text-white placeholder-black-500 border border-gray-700 outline-none focus:border-white focus:ring-2 focus:ring-white transition duration-200 shadow-sm"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white text-black-500 placeholder-black-500 border border-gray-700 outline-none h-32 resize-none focus:border-white focus:ring-2 focus:ring-white transition duration-200 shadow-sm"
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="captcha"
                required
                className="rounded focus:ring-2 focus:ring-white transition duration-200"
              />
              <label htmlFor="captcha" className="text-sm">
                I'm not a robot
              </label>
            </div>
            <button
              type="submit"
              className="bg-white text-black-500 hover:bg-white hover:text-black-500 transition-all duration-300 p-3 rounded-lg font-semibold w-full md:w-auto self-center shadow-md hover:shadow-xl transform hover:scale-105 border border-white"
            >
              SEND YOUR MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
