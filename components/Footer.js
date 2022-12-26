import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 md:text-start">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-sm font-bold">Airbnb</h5>
          <p className="hover:underline cursor-pointer">Newsroom</p>
          <p className="hover:underline cursor-pointer">
            Learn about new features
          </p>
          <p className="hover:underline cursor-pointer">
            Letter from our founders
          </p>
          <p className="hover:underline cursor-pointer">Careers</p>
          <p className="hover:underline cursor-pointer">Investors</p>
          <p className="hover:underline cursor-pointer">Gift cards</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-sm font-bold">Community</h5>
          <p className="hover:underline cursor-pointer">
            Airbnb.org: disaster relief housing
          </p>
          <p className="hover:underline cursor-pointer">
            Combating discrimination
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-sm font-bold">Hosting</h5>
          <p className="hover:underline cursor-pointer">Airbnb your home</p>
          <p className="hover:underline cursor-pointer">AirCover for Hosts</p>
          <p className="hover:underline cursor-pointer">
            Explore hosting resources
          </p>
          <p className="hover:underline cursor-pointer">
            Visit our community forum
          </p>
          <p className="hover:underline cursor-pointer">
            How to host responsibly
          </p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-sm font-bold">Support</h5>
          <p className="hover:underline cursor-pointer">Help Center</p>
          <p className="hover:underline cursor-pointer">AirCover</p>
          <p className="hover:underline cursor-pointer">
            Supporting people with disabilities
          </p>
          <p className="hover:underline cursor-pointer">Cancellation options</p>
          <p className="hover:underline cursor-pointer">
            Our COVID-19 Response
          </p>
          <p className="hover:underline cursor-pointer">
            Report a neighborhood concern
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
