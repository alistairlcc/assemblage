// markers.js
import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import * as styles from "./Map.module.scss";

const Marker = ({ map, place }) => {
  const markerRef = useRef();
  const popupRef = useRef(null);

  useEffect(() => {
    // const marker = new mapboxgl.Marker(markerRef)
    const marker = new mapboxgl.Marker({ color: "white" })
      .setLngLat([place.longitude, place.latitude])
      .setPopup(new mapboxgl.Popup().setDOMContent(popupRef.current))
      .addTo(map);

    return () => marker.remove();
  });

  // return <div ref={markerRef} />;
  return (
    <>
      <div ref={markerRef} className={styles.marker}>
        <div ref={popupRef}>{place.name}</div>
      </div>
    </>
  );
};

const Markers = ({ map, places }) => {
  return (
    <>
      {places &&
        places.map((place, index) => (
          <Marker key={index} map={map} place={place} />
        ))}
    </>
  );
};

export { Markers };
