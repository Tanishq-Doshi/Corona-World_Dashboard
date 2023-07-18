import React from 'react'
import "./Map.css"
import {Map as LeafletMap,TileLayer} from "react-leaflet";
import { showDataOnMap } from './util';

function Map({countries,casesType,center,zoom}) {
  return (
    <div className="map">
        <LeafletMap center={center} zoom={zoom}>
          <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=r2Bjp28Pjw1qDcS6RkoX"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {showDataOnMap(countries,casesType)}
        </LeafletMap>
    </div>
  );
}

export default Map;