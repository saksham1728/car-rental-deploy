import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description:
      "I had an amazing experience renting a car here. The vehicle was spotless and drove like new, and the customer service team went above and beyond to help me.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description:
      "Booking was seamless and quick. The rates were transparent with no hidden fees, and pickup/drop‑off was a breeze. Highly recommend!",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description:
      "Their drivers are professional and courteous. I felt completely safe and comfortable throughout my entire trip. Will definitely rent again!",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Real feedback from customers who have driven with confidence and comfort—no scripts, just honest reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((entry) => (
              <div
                key={entry.name}
                data-aos="fade-up"
                data-aos-delay={entry.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt={entry.name}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{entry.description}</p>
                <p className="text-center font-semibold">{entry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
