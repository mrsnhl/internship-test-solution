import React from "react";
import UserDetails from "./UserDetails";
import style from "./App.module.css";
import addPositionToMap from './addPositionToMap';
import L from 'leaflet';

export default function App() {

  const [position, setPosition] = React.useState([0,0]);
  const [map, setMap] = React.useState(undefined);

  React.useEffect(
    function() {
      setMap(L.map("map").setView(position, 4));
    },[]);

  React.useEffect( function() {
    if(map !== undefined) {
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
  }, [map]);

  React.useEffect(
    function() {
      if(map !== undefined) {
        addPositionToMap(map, position);
      }
    },[map, position]);

  return (
    <div>
      <div className={style.heading}>Profile</div>
      <div id="map" style={{height: '180px', borderRadius: '20px'}}></div>
      <UserDetails position={position} setPosition={setPosition} />
    </div>
  );
}
