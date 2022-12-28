import React from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import MapView from "../components/MapView";

const Search = ({ searchResult }) => {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex overflow-hidden">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">{`300+ Stays - ${range} for ${numberOfGuests} guests`}</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">{`Stays in ${location}`}</h1>
          <div className="hidden space-x-3 mb-5 text-gray-800 whitespace-nowrap lg:inline-flex">
            <p className="button">Cancellation Flexibillity</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden cursor-grabbing lg:inline-flex xl:min-w-[600px]">
          <MapView searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const searchResult = await fetch(`https://www.jsonkeeper.com/b/5NPS`).then(
    (res) => res.json()
  );

  return { props: { searchResult } };
}

export default Search;
