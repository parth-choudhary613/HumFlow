import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 backdrop-blur-sm text-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
          <div className="md:mb-0 mb-4">
            <h2 className="text-white font-manrope text-4xl font-semibold leading-10 mb-5 m-4 sm:m-4 md:text-left text-center">
              Get In Touch
            </h2>
            <p className="text-gray-50 text-lg font-normal leading-7 mb-7 md:text-left text-center">
              Whether you have a concern or simply want to say hello, we are here to facilitate communication with you.
            </p>
            <div className="flex md:items-center md:justify-start justify-center">
              <button className="w-36 h-12 rounded-full bg-green-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">
                Contact Us
              </button>
            </div>
          </div>

          <div className="border-l-2 md:border-green-700 border-white px-10 py-6 m-4 sm:m-4">
            <div className="mb-8">
              <h6 className="text-white text-sm font-medium leading-5 pb-3 md:text-start text-center">
                Email Address
              </h6>
              <h3 className="text-slate-300 text-xl font-semibold leading-8 md:text-start text-center">
                pagedone@gmail.com
              </h3>
            </div>
            <div>
              <h6 className="text-white text-sm font-medium leading-5 pb-3 md:text-start text-center">
                Phone Number
              </h6>
              <h3 className="text-slate-300 text-xl font-semibold leading-8 md:text-start text-center">
                470-601-1911
              </h3>
            </div>
          </div>
        </div>
<h2 className="text-white font-manrope text-4xl font-semibold leading-10 mb-5 m-4 sm:m-4 md:text-left text-center">
              Our Team
            </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {[
            {
              country: "United Kingdom",
              address: "123 High Street, Westminster, London",
              img: "https://t3.ftcdn.net/jpg/06/33/80/44/360_F_633804450_DWH5bj77LdDwlCSvMcqy6qVk4j9kchT3.jpg",
            },
            {
              country: "Germany",
              address: "101 Unter den Linden, Mitte District, Berlin",
              img: "https://media.istockphoto.com/id/1489414046/photo/portrait-of-an-attractive-empowered-multiethnic-woman-looking-at-camera-and-charmingly.jpg?s=612x612&w=0&k=20&c=p9-7xtXTjNUUDYJVJmZ2pka98lr2xiFCM1jFLqpgF6Q=",
            },
            {
              country: "France",
              address: "456 Rue de la Paix, 8th Arrondissement, Paris",
              img: "https://media.istockphoto.com/id/1017296544/photo/testing-software.jpg?s=612x612&w=0&k=20&c=9K02VDBeVtaLCThLojKphZpZ6x8o7DUi3UQ4r1tTmQU=",
            },
            {
              country: "Switzerland",
              address: "987 Bahnhofstrasse, Zurich City Center, Zurich",
              img: "https://t3.ftcdn.net/jpg/05/40/63/14/360_F_540631446_a39tc1A3Smh7U2xbyijSEKGrx4FbJW6F.jpg",
            },
          ].map((location, index) => (
            <div
              key={index}
              className="h-96 relative flex justify-center rounded-lg overflow-hidden"
            >
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
              <img
                src={location.img}
                alt={`${location.country} image`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  {location.country}
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  {location.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
