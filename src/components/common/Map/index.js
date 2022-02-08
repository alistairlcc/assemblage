// tutorial here for gatsby
// https://erraticgenerator.com/blog/gatsby-blog-with-mapbox-gl-js-using-react-hooks/
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import bbox from "@turf/bbox";
import { multiPoint } from "@turf/helpers";
import { Markers } from "./markers";

import * as styles from "./Map.module.scss";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWxpc3RhaXJtY2NseW1vbnQiLCJhIjoiY2t0NmJmdnVhMGgwODJ2cGRoNjlhdGVjNyJ9.wIVimISa5HbJE2I5_V3x5A";

// const MAPBOX_TOKEN =
//   "pk.eyJ1IjoiYWxpc3RhaXJtY2NseW1vbnQiLCJhIjoiY2t0NmJjNWs0MGdwMzJxcXNjM3FlZ3dzNSJ9.3kk6oSWmF-hS3XGMvBQm_g";
// const mapContainerStyle = {
//   width: "100%",
//   height: "520px",
// };

const Map = ({ zoom = 13, places, className }) => {
  // const places = [
  //   {
  //     name: title,
  //     longitude: longitude,
  //     latitude: latitude,
  //   },
  // ];

  const mapContainerRef = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/dark-v10",
      // style: "mapbox://styles/alistairmcclymont/ckx27fspr2hr914mnu428bbe7",
      // style: "mapbox://styles/alistairmcclymont/ckx3r23ew0lu214n7mh17roa9",
      // center: [longitude, latitude],
      zoom: 10,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    setMap(map);

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (!map) return;

    if (places.length !== 0) {
      // console.log("places", places);
      const coords = [];
      places.forEach((place) => {
        coords.push([place.longitude, place.latitude]);
      });
      const feature = multiPoint(coords);
      const box = bbox(feature);

      map.fitBounds(
        [
          [box[0], box[1]],
          [box[2], box[3]],
        ],
        {
          padding: 40,
          maxZoom: 12,
          duration: 2500,
        }
      );
    } else {
      map.easeTo({
        center: [-73.9856, 40.7497],
        zoom: 10,
        duration: 2000,
      });
    }
  }, [map, places]);

  // return <div ref={mapContainerRef} className={styles.map} />;

  return (
    <div ref={mapContainerRef} className={className}>
      {places && map && <Markers map={map} places={places} />}
    </div>
  );
};

export { Map };
