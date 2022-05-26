import React from "react";
import styledComponents from "styled-components";
import Ptext from "./Ptext";
import MapImg from "../assets/images/map.png";

const MapStyles = styledComponents.div`
background: url(${MapImg})no-repeat center / cover;
min-height: 400px;
.container{
    position: relative;
    min-height: 400px;
}
.map__card{
    position: absolute;
    right: 100%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 300px;
    border-radius: 12px;
}
.map__card__heading{
    font-size: 3rem;
    margin-bottom: 1rem;
}
.map__card__link{
display: inline-block;
font-size: 1.6rem;
margin-top: 3rem;
text-decoration: underline;
}
@media only screen and (max-didth: 768px){
    background-position: 80% center;
}
@media only screen and (max-didth: 400px){
    background-position: 80% center;
    .map__card{
        max-width: none;
        right: auto;
    }
}
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <Ptext>Pretoria, Gauteng, South Africa</Ptext>
          <a
            className="map__card__link"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open in Maps{" "}
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
