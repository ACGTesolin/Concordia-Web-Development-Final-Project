import L  from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "./mapDisplay.css";
import { useContext, useState } from "react";
import BeerInfoContext from "../BeerInfoContext";
import {Link} from "react-router-dom";
import {icon} from "leaflet";

const beerMug = new icon({
    iconUrl: "/download.png",
    iconSize:[35,35]
})

const MapDisplay = () => {
  const { allBreweries } = useContext(BeerInfoContext);
  


  return (
    <MapContainer
      center={[45.5017, -73.5673]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {allBreweries.map((brewery) => (
        <Marker
          key={brewery.id}
          position={[brewery.coordinates[0], brewery.coordinates[1]]}
            icon={beerMug}
        >
<Popup>
            <div>
              <Img src={brewery.logo}/>
                <BreweryLink to={`/brewery/${brewery.id}`}>{brewery.name}</BreweryLink>
                <p>{brewery.adress}</p>
            </div>

        </Popup>

        </Marker>
      ))}

    </MapContainer>
  );
};

export default MapDisplay;

const BreweryLink = styled(Link)`
`;

const Img = styled.img`
height:40px;
width:40px;
`;




