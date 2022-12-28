import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const MapView = ({ searchResult }) => {
  const coordinates = searchResult.map(({ long, lat }) => ({
    longitude: long,
    latitude: lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      {...viewport}
      mapStyle="mapbox://styles/galpalas265/clc7hm4lx00a414pg82qhp1v7"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {/* {searchResult.map((result, index) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p className="text-3xl">📌</p>
          </Marker>
        </div>
      ))} */}
    </Map>
  );
};

export default MapView;
