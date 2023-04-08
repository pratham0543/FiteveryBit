import React from "react";
import { GoogleMap, useLoadScript} from "@react-google-maps/api";
function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}
const Googlemaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCWtKAOGUhOX8HaJKONxzHIspv4oPNGQ6U",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default Googlemaps;
