import type { NextPage } from "next";
import { cities } from "../data.js";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gal Palas Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cities.map(({ id, image, location, distance }) => (
              <SmallCard
                key={id}
                img={image}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
