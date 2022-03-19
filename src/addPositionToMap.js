import React from "react";
import L from "leaflet";

export default function addPositionToMap(map, position) {
    if(position[0]!==0 && position[1]!==1){
  L.marker(position)
    .addTo(map)
    .bindPopup(`Coordinates: ${position[0]}, ${position[1]}`)
    .openPopup();
    }
}
