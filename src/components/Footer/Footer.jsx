import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Car Rental and Description */}
          <div className="flex-1">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 font-serif">
              Car Rental
            </h1>
            <p className="text-sm">
              Your journey begins here. At Car Rental, we provide reliable, affordable,
              and convenient vehicle rental services tailored to your needs. Whether
              it's a business trip or a weekend getaway, we've got you covered.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1">
            <h1 className="sm:text-xl text-xl font-bold mb-3">Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                  onClick={() => (window.location.href = link.link)}
                >
                  <span>&#11162;</span>
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h1 className="sm:text-xl text-xl font-bold mb-3">Contact Us</h1>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Doranda Nepal House, Mazar Sarif</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>8271347544</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaMobileAlt />
              <p>8789866877</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaMobileAlt />
              <p>9471357164</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
