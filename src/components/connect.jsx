import React, { useState } from "react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    company: "",
    telephone: "",
    email: "",
    heardFrom: "",
    interestedIn: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for connecting! We'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans">
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#001f3f]">
            Drop us a line.
          </h1>
          <h2 className="text-2xl mb-8 text-[#001f3f]">
            We're ready to connect.
          </h2>
        </div>
        <div className="h-px bg-gray-300 divider-l"></div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Office Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#001f3f]">Comsol Offices</h3>
            <p className="mb-4 text-[#001f3f]">Contact us using the details below.</p>
            <h4 className="font-semibold mb-2 text-[#001f3f]">Head Office</h4>
            <p className="mb-2 text-[#001f3f]">
              152 Roan Crescent, Corporate Park North, Midrand, Gauteng, South
              Africa
            </p>
            <p className="text-[#001f3f]">Telephone <a href="tel:+270101408800" className="hover:text-[#FFC107]">+27 (0) 10 140 8800</a></p>
            <p className="text-[#001f3f]">Fax <a href="fax:+270862462332" className="hover:text-[#FFC107]">+27 (0) 86 246 2332</a></p>
            <p className="text-[#001f3f]">Email <a href="mailto:info@comsol.co.za" className="hover:text-[#FFC107]">info@comsol.co.za</a></p>
            <p className="text-[#001f3f]">Physical address 152 Roan Crescent Corporate Park North Midrand Gauteng South Africa</p>
            <p className="text-[#001f3f]">Directions <a href="https://goo.gl/maps/MZ7SmdsS5GD2" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107]">View map</a></p>
            {/* Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.078988688557!2d28.131892475258!3d-25.974116477201157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956f5e2e7b9b3d%3A0x8b0b0b0b0b0b0b0b!2s152%20Roan%20Crescent%2C%20Corporate%20Park%20North%2C%20Midrand%2C%201685!5e0!3m2!1sen!2sza!4v1727877600000"
              className="w-full h-64 mt-4 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-[#001f3f]">Contact form</h3>
            <p className="text-[#001f3f]">Enter your details below and we'll get right back to you.</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            />
            <select
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            >
              <option value="">How did you hear about us?</option>
              <option value="friend">Friend / colleague</option>
              <option value="advert">Advert / billboard</option>
              <option value="article">Article / opinion piece</option>
              <option value="email">Email / newsletter</option>
              <option value="employee">Employee / reseller</option>
              <option value="search">Search engine</option>
              <option value="social">Social media</option>
              <option value="other">Other</option>
            </select>
            <select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            >
              <option value="">I am interested in</option>
              <option value="cx-enterprise">CX Enterprise</option>
              <option value="cx-enterprise-plus">CX Enterprise Plus</option>
              <option value="cx-broadband">CX Broadband</option>
              <option value="cx-broadband-plus">CX Broadband Plus</option>
              <option value="cx-broadband-lite">CX Broadband Lite</option>
              <option value="cx-specific">CX Specific</option>
              <option value="cx-offnet">CX Offnet</option>
              <option value="private-5g">Private 5G</option>
              <option value="on-campus">High-capacity on-campus connectivity</option>
              <option value="wi-fi">Wi-Fi</option>
              <option value="quote">Need a quote</option>
              <option value="site-assessment">Need a site assessment</option>
              <option value="media">Media</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded hover:border-[#FFC107] transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="bg-[#001f3f] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Connect;