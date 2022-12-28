/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "www.history.com",
      "www.shutterstock.com",
      "www.jsonkeeper.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZ2FscGFsYXMyNjUiLCJhIjoiY2txOThlYWh6MGFldjJwam94dTlldjh0eSJ9.yC0mBcPnSJQTe6sSsfbIVQ",
  },
};
